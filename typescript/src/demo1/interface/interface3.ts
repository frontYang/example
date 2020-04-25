// 当用 number去索引StringArray时会得到string类型的返回值。
interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
