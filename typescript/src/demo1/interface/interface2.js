"use strict";
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
var mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
mySearch('aaa', 'ccc'); // false
