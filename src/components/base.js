import notice from './notice'
/* eslint-disable */
Date.prototype._format = function (fmt) { // author: songhlc
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
// 获取组件引用
function getRef (ref) {
  if (ref && window.YCLOUD_REFS) {
    return window.YCLOUD_REFS[ref]
  } else {
    return {}
  }
}
/* eslint-disable */
export default {
  notice,
  getRef
}
