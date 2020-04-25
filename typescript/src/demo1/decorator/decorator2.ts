function logClass0(params: string) {
  return function (target: any) {
    console.log(target) // [Function: HttpClient1]
    console.log(params) // http:///

    target.prototype.apiUrl = params
  }
}

@logClass0('http:///')
class HttpClient1 {
  [x: string]: any
  constructor() {}
  getData() {}
}

var http1 = new HttpClient1()
console.log(http1.apiUrl) // http:///
