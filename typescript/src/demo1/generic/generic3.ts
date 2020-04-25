class MinClass<T> {
  public list!: <T>() => []
  constructor() {}
  add(value: T): void {
    console.log(value)
    // this.list && this.list.push(value)
  }
}
var m2 = new MinClass<number>() // 实例化类，指定T类型是number
m2.add(1)
// m2.add('1') // 报错

/* class GenericNumber<T> {
  zeroValue?: T
  add?: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
} */
