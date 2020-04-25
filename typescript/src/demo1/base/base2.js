"use strict";
// 元组 tuple
var arr = [123, 'ts', true];
// any
var numAny = 123;
numAny = 'ts';
numAny = true;
// 用处，获取dom节点,如果不指明类型会报错
// let obj: object = document.getElementById('obj') // 错误，dom 节点不是真正的对象
var obj = document.getElementById('obj');
obj.style.color = 'red';
//  enum 枚举
// 如果标识符有赋值，则取值
var Flg;
(function (Flg) {
    Flg[Flg["success"] = 1] = "success";
    Flg[Flg["error"] = 0] = "error";
})(Flg || (Flg = {}));
var a = Flg.success; // 1
var b = Flg.error; // 0
// 如果标识符没有赋值，则取下标
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red; // 1
// 如果只指明了第一个数值， 表示改成从 1开始编号
var Color1;
(function (Color1) {
    Color1[Color1["blue"] = 1] = "blue";
    Color1[Color1["red"] = 2] = "red";
    Color1[Color1["orange"] = 3] = "orange";
})(Color1 || (Color1 = {}));
var c1 = Color1.red; // 2
console.log(c1);
// 常用于状态码
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var e = Err.null; // -2
// type foo = string | number | boolean
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        // 这里 foo 被收窄为 string 类型
    }
    else if (typeof foo === 'number') {
        // 这里 foo 被收窄为 number 类型
    }
    else {
        // foo 在这里是 never
        var check = foo;
    }
}
// 类型推论
/* let myFavoriteNumber = 'seven'
myFavoriteNumber = 7 */
/* let myFavoriteNumber
myFavoriteNumber = 'seven'
myFavoriteNumber = 7 */
/*
//  联合类型
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
 */
