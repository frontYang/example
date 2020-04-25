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
function logClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function logAttr(params) {
    return function (tartet, attr) {
        console.log('属性装饰器');
    };
}
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log('方法装饰器');
    };
}
function logParams1(params) {
    return function (target, methodName, index) {
        console.log('参数装饰器1');
    };
}
function logParams2(params) {
    return function (target, methodName, index) {
        console.log('参数装饰器2');
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
    }
    HttpClient6.prototype.getData = function () {
        return true;
    };
    HttpClient6.prototype.setData = function (attr1, attr2) { };
    __decorate([
        logAttr()
    ], HttpClient6.prototype, "apiUrl", void 0);
    __decorate([
        logMethod()
    ], HttpClient6.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient6.prototype, "setData", null);
    HttpClient6 = __decorate([
        logClass1('1111'),
        logClass2('2222')
    ], HttpClient6);
    return HttpClient6;
}());
// log：
// 属性装饰器
// 方法装饰器
// 参数装饰器2
// 参数装饰器1
// 类装饰器2
// 类装饰器1
