// 普遍用 T 表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value: T): T {
  // console.log(value.length) // 错误
  return value
}

// 第一种调用方式
getData<number>(123)
// getData<number>('123') // 报错

// 第二种调用方式，这种方式更普遍
// 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
getData(123)
