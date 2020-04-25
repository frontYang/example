interface SearchFunc {
  (source: string, subString: string): boolean
}

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
let mySearch: SearchFunc = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

mySearch('aaa', 'ccc') // false
