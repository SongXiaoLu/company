// 判断是否为数组
export function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}
// 判断是否为函数
export function isFunction(it) {
  return Object.prototype.toString.call(it) === '[object Function]';
}
