// 元组 tuple
let arr: [number, string, boolean] = [123, 'ts', true]

// any
let numAny: any = 123
numAny = 'ts'
numAny = true

// 用处，获取dom节点,如果不指明类型会报错
// let obj: object = document.getElementById('obj') // 错误，dom 节点不是真正的对象
let obj: any = document.getElementById('obj')
obj.style.color = 'red'

//  enum 枚举
// 如果标识符有赋值，则取值
enum Flg {
  success = 1,
  error = 0,
}
let a: Flg = Flg.success // 1
let b: Flg = Flg.error // 0

// 如果标识符没有赋值，则取下标
enum Color {
  blue,
  red,
  orange,
}
let c: Color = Color.red // 1

// 如果只指明了第一个数值， 表示改成从 1开始编号
enum Color1 {
  blue = 1,
  red,
  orange,
}
let c1: Color1 = Color1.red // 2
console.log(c1)

// 常用于状态码
enum Err {
  undefined = -1,
  null = -2,
  success = 1,
}
let e: Err = Err.null // -2

// never
type foo = string | number
// type foo = string | number | boolean

function controlFlowAnalysisWithNever(foo: foo) {
  if (typeof foo === 'string') {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === 'number') {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo
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
