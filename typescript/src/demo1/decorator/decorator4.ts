function getFn(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(desc) // 如果代码输出目标版本小于ES5，属性描述符将会是undefined。
    console.log(desc.vaule) // 当前方法

    target.apiUrl = 'http://'
    target.run = function () {
      console.log('run')
    }

    // 替代方法
    /* var oFn = desc.value
    desc.value = function (...args: any[]) {
      args = args.map((value) => {
        return String(value)
      })

      console.log(args) // ['123', 'xxx']
    } */

    // 修改方法
    /* var oFn = desc.value
    desc.value = function (...args: any[]) {
      args = args.map((value) => {
        return String(value)
      })
      console.log(args) // ['123', 'xxx']
      oFn.apply(this, args)
    } */
  }
}

class HttpClient4 {
  [x: string]: any
  public url: any | undefined
  constructor() {}
  @getFn('http://')
  getData() {
    console.log('getData', this.apiUrl) // getData http://
  }
}

let test4 = new HttpClient4()
console.log(test4.apiUrl) // http://
// test4.getData()

// 修改方法，两个方法的值都会打印，先打印修改的，后打印原来的
// 替换方法：只打印覆盖的方法的内容
// test4.getData(123, 'xx')
