function logClass(params: any) {
  console.log(params) // [Function: HttpClient], 当前类

  // 动态扩展
  params.prototype.apiUrl = 'http:///'
  params.prototype.run = function () {
    console.log('run')
  }
}

@logClass
class HttpClient {
  [x: string]: any
  constructor() {}
  getData() {}
}

var http = new HttpClient()
console.log(http.apiUrl) // http:///
http.run() // run
