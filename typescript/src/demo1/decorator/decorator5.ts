function getParams(params: any) {
  return function (target: any, methodName: any, index: any) {
    console.log(params) // xxxx
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(index) // 0

    target.apiUrl = params
  }
}

class HttpClient5 {
  [x: string]: any
  public url: any | undefined
  constructor() {}

  getData(@getParams('xxxx') id: any) {
    console.log(id) // 123
  }
}

var test6 = new HttpClient5()
test6.getData(123)
console.log(test6.apiUrl) // xxxx
