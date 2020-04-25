interface Rules {
  require?: Boolean
  minLength?: Number
  maxLength?: Number
  message: string
  pattern?: RegExp
}

// 策略类
class Strategies {
  protected require(value: string | Number, message: string): string {
    return value ? '' : message
  }

  protected pattern(value: string, reg: RegExp, message: string): string {
    if (reg.test(value)) {
      return ''
    } else {
      return message
    }
  }

  protected minLength(value: string | Number, len: Number, message: string): string {
    if ((<string>value).length) {
      return (<string>value).length >= len ? '' : message
    } else {
      return value.toString().length >= len ? '' : message
    }
  }

  protected maxLength(value: string | Number, len: Number, message: string): string {
    if ((<string>value).length) {
      return (<string>value).length <= len ? '' : message
    } else {
      return value.toString().length <= len ? '' : message
    }
  }
}

// 验证类
export default class Validate<T extends Rules> extends Strategies {
  public rules: Object
  public params: any
  private validateList: Array<Function> = []
  private strategies: any = {
    require: this.require,
    pattern: this.pattern,
    minLength: this.minLength,
    maxLength: this.maxLength,
  }
  public constructor(rules: Object, params: Object) {
    super()
    this.rules = rules
    this.params = params
    this.add(this.rules)
  }
  // 添加策略
  protected add(rules: any): void {
    for (const iterator in rules) {
      const value = this.params[iterator]
      const _iterator = rules[iterator]
      for (const item of _iterator) {
        for (const key in item) {
          if (!this.strategies.hasOwnProperty(key)) break
          this.validateList.push(() => {
            let flg: boolean = key === 'require' && item[key]
            return flg
              ? this.strategies[key](value, item.message)
              : this.strategies[key](value, item[key], item.message)
          })
        }
      }
    }
  }
  // 开始策略检验
  public start(): any {
    for (const validatorFunc of this.validateList) {
      const message = validatorFunc()
      if (message) {
        return validatorFunc()
      }
    }
  }
}

// 需要验证的对象
let params = {
  phone: 'sdfsdfsdfsd',
  password: '',
  captcha: '',
}

// 验证规则
let rules = {
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
}

const validate = new Validate(rules, params)
const message = validate.start()
console.log(message)
