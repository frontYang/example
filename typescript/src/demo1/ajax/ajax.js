"use strict";
function ajax(config) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(config.type, config.url, true);
        xhr.send(config.data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = config.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
                resolve(data);
            }
            else {
                reject(xhr);
            }
        };
    });
}
ajax({
    type: 'get',
    data: 'name=xiaoming',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json',
})
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.log(err);
});
