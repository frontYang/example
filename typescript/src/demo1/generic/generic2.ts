// 方式一：
interface ConfigFn {
  <T>(value: T): T
}
var setData: ConfigFn = function <T>(value: T): T {
  return value
}
setData('name')

/* // 方式二：
interface ConfigFn<T> {
  (value: T): T
}
var setData: ConfigFn = function <T>(value: T): T {
  return value
}
setData('name')
 */
