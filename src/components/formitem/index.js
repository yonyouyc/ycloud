import template from './index.html'
import ko from 'knockout'
function init (params) {
  this.model = params.model
  this.required = params.required || false
  this.label = params.label
  this.style = params.style
  this.visible = params.visible || ko.observable(true)
  this.errorMsg = ko.observable('error msg')
  this.vMap = params.vMap || false
  this.validate = ko.computed(() => {
    if (params.vMap) {
      let filteList = params.vMap().filter((item) => {
        return item.key === params.vKey
      })
      if (filteList.length > 0) {
        this.errorMsg(filteList[0].message)
      }
      return filteList.length > 0
    } else {
      return false
    }
  })
}

export default {
  name: 'formitem',
  init,
  template
}
