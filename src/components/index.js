import ko from 'knockout'
import demo from './demo'
import dropdown from './dropdown'
const PREFIX = 'y-'
function register (model) {
  ko.components.register(PREFIX + model.name, {
    viewModel: model.init,
    template: model.template
  })
}
register(demo)
register(dropdown)
