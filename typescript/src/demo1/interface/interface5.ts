interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

// let square = <Square>{} // 类型断言
let square: Square = {
  color: 'blue',
  sideLength: 10,
}

// 继承多个
interface Shape1 {
  color: string
}
interface PenStroke1 {
  penWidth: number
}
interface Square1 extends Shape1, PenStroke1 {
  sideLength: number
}

let square1: Square1 = {
  color: 'blue',
  sideLength: 10,
  penWidth: 5,
}
