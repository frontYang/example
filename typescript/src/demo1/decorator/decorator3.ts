function logProp(params: any) {
  return function (target: any, attr: any) {
    console.log(target) // HttpClient { getData: [Function] }
    console.log(attr) // url
    console.log(params) // http://

    target[attr] = params
  }
}

class HttpClient3 {
  @logProp('http://')
  public url: any | undefined

  constructor() {}
  getData() {
    console.log(this.url) // http://
  }
}

let h = new HttpClient3()
h.getData()
