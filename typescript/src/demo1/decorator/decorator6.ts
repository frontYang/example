function logClass1(params: any) {
  return function (target: any) {
    console.log('类装饰器1')
  }
}
function logClass2(params: any) {
  return function (target: any) {
    console.log('类装饰器2')
  }
}
function logAttr(params?: any) {
  return function (tartet: any, attr: any) {
    console.log('属性装饰器')
  }
}
function logMethod(params?: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log('方法装饰器')
  }
}
function logParams1(params?: any) {
  return function (target: any, methodName: any, index: any) {
    console.log('参数装饰器1')
  }
}
function logParams2(params?: any) {
  return function (target: any, methodName: any, index: any) {
    console.log('参数装饰器2')
  }
}

@logClass1('1111')
@logClass2('2222')
class HttpClient6 {
  @logAttr()
  public apiUrl: string | undefined

  constructor() {}

  @logMethod()
  getData() {
    return true
  }
  setData(@logParams1() attr1: any, @logParams2() attr2: any) {}
}
// log：
// 属性装饰器
// 方法装饰器
// 参数装饰器2
// 参数装饰器1
// 类装饰器2
// 类装饰器1
