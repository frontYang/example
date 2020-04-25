"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 策略类
var Strategies = /** @class */ (function () {
    function Strategies() {
    }
    Strategies.prototype.require = function (value, message) {
        return value ? '' : message;
    };
    Strategies.prototype.pattern = function (value, reg, message) {
        if (reg.test(value)) {
            return '';
        }
        else {
            return message;
        }
    };
    Strategies.prototype.minLength = function (value, len, message) {
        if (value.length) {
            return value.length >= len ? '' : message;
        }
        else {
            return value.toString().length >= len ? '' : message;
        }
    };
    Strategies.prototype.maxLength = function (value, len, message) {
        if (value.length) {
            return value.length <= len ? '' : message;
        }
        else {
            return value.toString().length <= len ? '' : message;
        }
    };
    return Strategies;
}());
// 验证类
var Validate = /** @class */ (function (_super) {
    __extends(Validate, _super);
    function Validate(rules, params) {
        var _this = _super.call(this) || this;
        _this.validateList = [];
        _this.strategies = {
            require: _this.require,
            pattern: _this.pattern,
            minLength: _this.minLength,
            maxLength: _this.maxLength,
        };
        _this.rules = rules;
        _this.params = params;
        _this.add(_this.rules);
        return _this;
    }
    // 添加策略
    Validate.prototype.add = function (rules) {
        var _this = this;
        var _loop_1 = function (iterator) {
            var value = this_1.params[iterator];
            var _iterator = rules[iterator];
            var _loop_2 = function (item) {
                var _loop_3 = function (key) {
                    if (!this_1.strategies.hasOwnProperty(key))
                        return "break";
                    this_1.validateList.push(function () {
                        var flg = key === 'require' && item[key];
                        return flg
                            ? _this.strategies[key](value, item.message)
                            : _this.strategies[key](value, item[key], item.message);
                    });
                };
                for (var key in item) {
                    var state_1 = _loop_3(key);
                    if (state_1 === "break")
                        break;
                }
            };
            for (var _i = 0, _iterator_1 = _iterator; _i < _iterator_1.length; _i++) {
                var item = _iterator_1[_i];
                _loop_2(item);
            }
        };
        var this_1 = this;
        for (var iterator in rules) {
            _loop_1(iterator);
        }
    };
    // 开始策略检验
    Validate.prototype.start = function () {
        for (var _i = 0, _a = this.validateList; _i < _a.length; _i++) {
            var validatorFunc = _a[_i];
            var message_1 = validatorFunc();
            if (message_1) {
                return validatorFunc();
            }
        }
    };
    return Validate;
}(Strategies));
exports.default = Validate;
// 需要验证的对象
var params = {
    phone: 'sdfsdfsdfsd',
    password: '',
    captcha: '',
};
// 验证规则
var rules = {
    phone: [
        { require: true, message: '请输入手机号码' },
        {
            pattern: /^1([34578][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
            message: '请输入正确的手机号码',
        },
    ],
    password: [
        { require: true, message: '请输入密码' },
        { minLength: 8, message: '密码长度不能低于8位数' },
    ],
    captcha: [
        { require: true, message: '请输入短信验证码' },
        { minLength: 6, message: '请输入正确的验证码' },
    ],
};
var validate = new Validate(rules, params);
var message = validate.start();
console.log(message);
