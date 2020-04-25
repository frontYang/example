"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./demo"); // 在外部使用时增加引入
var getnum1 = demo_1.A.getNum(); // 123
var getnum2 = demo_1.B.getNum(); // 234
console.log(getnum1);
console.log(getnum2);
