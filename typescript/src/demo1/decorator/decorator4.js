"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getFn(params) {
    return function (target, methodName, desc) {
        console.log(target); // HttpClient { getData: [Function] }
        console.log(methodName); // getData
        console.log(desc); // 如果代码输出目标版本小于ES5，属性描述符将会是undefined。
        console.log(desc.vaule); // 当前方法
        target.apiUrl = 'http://';
        target.run = function () {
            console.log('run');
        };
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
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        console.log('getData', this.apiUrl); // getData http://
    };
    __decorate([
        getFn('http://')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var test4 = new HttpClient4();
console.log(test4.apiUrl); // http://
// test4.getData()
// 修改方法，两个方法的值都会打印，先打印修改的，后打印原来的
// 替换方法：只打印覆盖的方法的内容
// test4.getData(123, 'xx')
