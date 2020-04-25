interface FullName {
  firstName: string
  lastName: string
  middleName?: string // 可选属性
  readonly age: number // 只读属性：只能在对象刚刚创建的时候修改其值
  [propName: string]: any // 任意属性
}

function getFullName(config: FullName): void {
  // config.age = 10 // 编译报错：Cannot assign to 'age' because it is a read-only property
  console.log(`${config.firstName} - ${config.middleName} - ${config.lastName}`)
}

getFullName({
  age: 2,
  firstName: 'anna',
  lastName: 'an',
  middleName: 'qq',
  test: 111,
}) // anna - an - qq
