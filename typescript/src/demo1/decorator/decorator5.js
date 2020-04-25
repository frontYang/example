"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function getParams(params) {
    return function (target, methodName, index) {
        console.log(params); // xxxx
        console.log(target); // HttpClient { getData: [Function] }
        console.log(methodName); // getData
        console.log(index); // 0
        target.apiUrl = params;
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function (id) {
        console.log(id); // 123
    };
    __decorate([
        __param(0, getParams('xxxx'))
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var test6 = new HttpClient5();
test6.getData(123);
console.log(test6.apiUrl); // xxxx
