interface Config {
  type: string
  url: string
  data?: string
  dataType: string
}

function ajax(config: Config) {
  return new Promise((resolve: any, reject: any) => {
    var xhr: any = new XMLHttpRequest()
    xhr.open(config.type, config.url, true)
    xhr.send(config.data)
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let data = config.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
        resolve(data)
      } else {
        reject(xhr)
      }
    }
  })
}

ajax({
  type: 'get',
  data: 'name=xiaoming',
  url: 'http://a.itying.com/api/productlist',
  dataType: 'json',
})
  .then((res: any) => {
    console.log(res)
  })
  .catch((err: any) => {
    console.log(err)
  })
