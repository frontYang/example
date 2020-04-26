# TypeScript

<p><img src="/ppt/css/images/typescript1.jpg" width="600" height="600" alt="typescript与javascript的关系" align="center"/></p>

- TypeScript 是<i style="color: red;">JavaScript 的超集</i>，包含 ES567

  - 新增了<i style="color: red;">类型校验</i>和<i style="color: red;">完整的面向对象</i>

- 使用 Typescript 编写的项目<i style="color: red;">更加容易扩展和维护</i>

- TypeScript 可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上

* 安装&编译
* 基础类型
* 函数
* 类
* 接口
* 泛型
* 命名空间
* 装饰器

## 安装&编译

- 安装：<i style="color:red">`npm i -g typescript`</i>

- 简单编译：<i style="color:red">`tsc 文件名.ts`</i>

- 在构建项目中：在根文件建立 <i style="color:red">tsconfig.json<i> 文件

tsconfit.json 参数详解

```json
{
  /* 设置为true时可以让IDE在保存文件的时候根据tsconfig.json重新生成文件 */
  "compileOnSave": true,

  /* 编译器选项  */
  "compilerOptions": {
    /* 基本选项 S */
    // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "target": "es5",
    // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "module": "commonjs",
    // 指定要包含在编译中的库文件
    "lib": [],
    // 允许编译 javascript 文件
    "allowJs": true,
    // 报告 javascript 文件中的错误
    "checkJs": true,
    // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "jsx": "preserve",
    // 生成相应的 '.d.ts' 文件
    "declaration": true,
    // 生成相应的 '.map' 文件
    "sourceMap": true,
    // 将输出文件合并为一个文件
    "outFile": "./",
    // 指定输出目录
    "outDir": "./",
    // 用来控制输出目录结构 --outDir.
    "rootDir": "./",
    // 删除编译后的所有的注释
    "removeComments": true,
    // 不生成输出文件
    "noEmit": true,
    // 从 tslib 导入辅助工具函数
    "importHelpers": true,
    // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
    "isolatedModules": true,
    /* 基本选项 E */

    /* 严格的类型检查选项 S */
    // 启用所有严格类型检查选项
    "strict": true,
    // 在表达式和声明上有隐含的 any类型时报错
    "noImplicitAny": true,
    // 启用严格的 null 检查
    "strictNullChecks": true,
    // 当 this 表达式值为 any 类型的时候，生成一个错误
    "noImplicitThis": true,
    // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    "alwaysStrict": true,
    /* 严格的类型检查选项 E */

    /* 额外的检查 S */
    // 有未使用的变量时，抛出错误
    "noUnusedLocals": true,
    // 有未使用的参数时，抛出错误
    "noUnusedParameters": true,
    // 并不是所有函数里的代码都有返回值时，抛出错误
    "noImplicitReturns": true,
    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
    "noFallthroughCasesInSwitch": true,
    /* 额外的检查 E */

    /* 模块解析选项 S */
    // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "moduleResolution": "node",
    // 用于解析非相对模块名称的基目录
    "baseUrl": "./",
    // 模块名到基于 baseUrl 的路径映射的列表
    "paths": {},
    // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "rootDirs": [],
    // 包含类型声明的文件列表
    "typeRoots": [],
    // 需要包含的类型声明文件名列表
    "types": [],
    // 允许从没有设置默认导出的模块中默认导入。
    "allowSyntheticDefaultImports": true,
    /* 模块解析选项 E */

    /* Source Map Options S */
    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "sourceRoot": "./",
    // 指定调试器应该找到映射文件而不是生成文件的位置
    "mapRoot": "./",
    // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSourceMap": true,
    // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
    "inlineSources": true,
    /* Source Map Options E */

    /* 其他选项 S */
    // 启用装饰器
    "experimentalDecorators": true,
    // 为装饰器提供元数据的支持
    "emitDecoratorMetadata": true
    /* 其他选项 E */
  },

  /* 指定需要编译的文件(相对或绝对文件路径的列表) */
  "files": ["hello.ts"],

  /* 指定要包含的文件 (glob匹配模式列表 )*/
  "include": ["src/**/*"],

  /* 指定要排除的文件 (glob匹配模式列表 ) */
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## 基础类型

```ts
/* boolean */
let flg: boolean = false

/* number */
let num: number = 1

/* string */
let str: string = 'ts'

/* array 方式一 */
let arr1: number[] = [1, 2]

/* array 方式二 */
let arr2: Array<number> = [1, 2, 3]
```

- <i style="color:red">tuple</i><!-- : 元组, 属于数组的一种，是一种限制数组的元素类型和个数的数组 -->

- <i style="color:red">any</i><!-- : 任意类型，可以随意赋值其他的类型 -->

- <i style="color:red">enum</i><!-- : 枚举 -->

- <i style="color:red">void</i><!-- : 表示没有任何类型，常用于方法没有返回值 -->

- <i style="color:red">never</i><!-- : 永远不会有返回值的类型 , 通常表现为抛出异常或无法执行到终止点(例如：死循环),也就是说never只能被never类型赋值 -->

* <i style="color:red">tuple</i>: 元组, 属于数组的一种，是一种限制数组的元素类型和个数的数组

```ts
let arr: [number, string, boolean] = [123, 'ts', true]
```

- <i style="color:red">any</i>: 任意类型，可以随意赋值其他的类型

```ts
let num: any = 123
num = 'ts'
num = true

/* any应用场景，获取dom节点,如果不指明类型会报错 */
// 错误，dom 节点不是真正的对象
// let obj: object = document.getElementById('obj')
let obj: any = document.getElementById('obj')
obj.style.color = 'red'
```

- <i style="color:red">enum</i>: 枚举

```ts
// 如果标识符有赋值，则取值
enum Flg {
  success = 1,
  error = 0,
}
let a: Flg = Flg.success // 1

// 如果标识符没有赋值，则取下标
enum Color {
  blue,
  red,
  orange,
}
let c: Color = Color.red // 1

// 常用于状态码
enum Err {
  undefined = -1,
  null = -2,
  success = 1,
}
let e: Err = Err.null // -2
```

- <i style="color:red">void</i>: 表示没有任何类型，常用于方法没有返回值

```ts
function run(): void {
  console.log('ts')
}
```

- <i style="color:red">never</i>: 永远不会有返回值的类型 , 通常表现为抛出异常或无法执行到终止点(例如：死循环),也就是说 never 只能被 never 类型赋值

```ts
// type foo = string | number
type foo = string | number | boolean

function controlFlowAnalysisWithNever(foo: foo) {
  if (typeof foo === 'string') {
    // 这里 为 string 类型
  } else if (typeof foo === 'number') {
    // 这里 为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo
  }
}
```

- 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。如果<i style="color: yellow">定义的时候没有赋值</i>，不管之后有没有赋值，都会<i style="color: yellow">被推断成 any 类型</i>而完全不被类型检查

* 联合类型：联合类型表示取值可以为多种类型中的一种。使用 <i style="color: red"> | </i> 分隔每个类型。

## 函数

声明

```ts
// 函数声明方式
function fn1(): string {
  return 'fn'
}

// 函数表达式声明方式
var fn2 = function (): string {
  return 'fn2'
}
```

传参

```ts
// 固定参数 （必须传两个参数，否则编译报错）
function fn3(name: string, age: number): string {
  return `${name}: ${age}`
}

// 可选参数
function fn4(name: string, age?: number): string {
  return age ? `${name}：${age}` : `${name}`
}

// 默认参数
function fn5(name: string, age: number = 20): string {
  return age ? `${name}：${age}` : `${name}`
}
```

## 类

```ts
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    return `${this.name} say hello`
  }
}

let person = new Person('Maggie')
person.say() // Maggie say hello
```

抽象类

- 抽象类是供其他类继承的基类，抽象类不允许被实例化

- 抽象类中的抽象方法必须在子类中被实现

- 用<i style="color:red">abstract</i>关键字定义抽象类和抽象方法

```ts
abstract class Animal {
  abstract say(): void
  move(): void {
    console.log('print')
  }
}
```

<!--
- 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

- 抽象方法只能放在抽象类里面

- 抽象类和抽象方法用来定义标准；例如：Animal类要求它的子类必须包含eat方法

- 抽象类的子类必须实现抽象类里面的方法
 -->

```ts
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

// department = new Department() // 错误: 不能创建一个抽象类的实例
let department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
department.generateReports()
```

## 接口

作用

- 接口是一种<i style="color:red">规范</i>的定义，定义了行为和动作的规范，用关键字 <i style="color:red">interface</i> 来定义

* 属性接口

* 函数接口

* 可索引接口

* 类类型接口

属性接口

```ts
interface FullName {
  firstName: string
  lastName: string
  middleName?: string // 可选属性
  readonly age: number // 只读属性：只能在对象刚刚创建的时候修改其值
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
}) // anna - an - qq
```

函数接口

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
let mySearch: SearchFunc = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

mySearch('aaa', 'ccc') // false
```

可索引接口

```ts
// 当用 number去索引StringArray时会得到string类型的返回值。
// 只要索引的类型是number时，那么值的类型必须是string
interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
```

类类型接口

- 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口，用 <i style="color: red">implements</i> 关键字来实现

```ts
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}
```

扩展&继承

- 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```ts
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
```

- 一个接口可以继承多个接口，创建出多个接口的合成接口。

```ts
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}

let square: Square = {
  color: 'blue',
  sideLength: 10,
  penWidth: 5,
}
```

## 泛型

- 泛型就是解决 类、接口、方法的复用性 以及对不确定类型的支持

* 泛型变量

* 泛型接口

* 泛型类

泛型变量

- 实现传入的参数类型和返回的参数类型一致
- 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

```ts
// 普遍用 T 表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value: T): T {
  //  console.log(value.length); // 错误
  return value
}

// 第一种调用方式
getData<number>(123)
getData<number>('123') // 报错

// 第二种调用方式，这种方式更普遍
// 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
getData(123)
```

泛型接口

```ts
// 方式一：
interface ConfigFn {
  <T>(value: T): T
}
var setData: ConfigFn = function <T>(value: T): T {
  return value
}
setData('name')

// 方式二：
interface ConfigFn<T> {
  (value: T): T
}
var setData: ConfigFn = function <T>(value: T): T {
  return value
}
setData('name')
```

泛型类

```ts
class MinClass<T> {
  public list:<T>[];
  add(value:T): void {
    this.list.push(value)
  }
  min(): T{
    var minNum = this.list[0]
    for(var i = 0; i < this.list.length; i++){
      if(minNum > this.list[i]){
        minNum = this.list[i]
      }
    }
    return minNum
  }
}
var m2 = new MinClass<number>() // 实例化类，指定T类型是number
m2.add(1)
m2.add('1') // 报错
```

## 命名空间

- 命名空间为 ts 内部模块，主要用于<i style="color: red;">避免命名冲突</i>，方便管理代码；可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内的对象通过 export 导出；用<i style="color: red;">namespace</i>关键词来声明命名空间

声明&使用

```ts
namespace A {
  export function getNum(): number {
    return 123
  }
}

namespace B {
  export function getNum(): number {
    return 234
  }
}

import { A, B } from './demo' // 在外部使用时增加引入

let getnum1 = A.getNum() // 123
let getnum2 = B.getNum() // 234
```

别名

```ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons // 创建一个别名
let sq = new polygons.Square() // 同 "new Shapes.Polygons.Square()"
```

## 装饰器

- 装饰器是一种特殊类型的声明，能够被附加到类声明、方法、属性或参数上，可以修改类的行为。
- 也就是说装饰器其实就是一个方法，可以注入到类、方法、属性参数上来<i style="color: red">扩展</i>对应的功能

* 类装饰器

* 装饰器工厂

* 属性装饰器

* 方法装饰器

* 参数装饰器

* 装饰器的执行顺序

类装饰器(不能传参)

```ts
function logClass(params: any) {
  console.log(params) // [Function: HttpClient], 当前类

  // 动态扩展
  params.prototype.apiUrl = 'http:///'
  params.prototype.run = function () {
    console.log('run')
  }
}

@logClass
class HttpClient {
  constructor() {}
  getData() {}
}

var http = new HttpClient()
console.log(http.apiUrl) // http:///
http.run() // run
```

装饰器工厂(能传参，比较常用)

```ts
function logClass(params: string) {
  return function (target: any) {
    console.log(target) // [Function: HttpClient]
    console.log(params) // http:///

    target.prototype.apiUrl = params
  }
}

@logClass('http:///')
class HttpClient {
  constructor() {}
  getData() {}
}

var http = new HttpClient()
console.log(http.apiUrl) // http:///
```

属性装饰器

属性装饰器表达会在运行时当做函数被调用，传入下列两个参数：

- 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象

- 成员的名字

```ts
function logProp(params: any) {
  return function (target: any, attr: any) {
    console.log(target) // HttpClient { getData: [Function] }
    console.log(attr) // url
    console.log(params) // http://

    target[attr] = params
  }
}

class HttpClient {
  @logProp('http://')
  public url: any | undefined

  constructor() {}
  getData() {
    console.log(this.url) // http://
  }
}

let h = new HttpClient()
h.getData()
```

方法装饰器

方法装饰器会被应用到方法的属性描述符上，可以用来监视、修改或替换方法定义 方法装饰器会在运行时传入下列 3 个参数：

- 对于静态成员来说是类的构造函数，对于实力成员是类的原型对象

- 成员的名字

- 成员的属性描述符

```ts
function getFn(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(desc) // 如果代码输出目标版本小于ES5，属性描述符将会是undefined。
    console.log(desc.vaule) // 当前方法

    target.apiUrl = 'http://'
    target.run = function () {
      console.log('run')
    }

    // 替代方法
    /* var oFn = desc.value
    desc.value = function(...args: any[]){
      args = args.map((value) => {
        return String(value)
      })

      console.log(args) // ['123', 'xxx']
    } */

    // 修改方法
    /* var oFn = desc.value
    desc.value = function(...args: any[]){
      args = args.map((value) => {
        return String(value)
      })
      console.log(args) // ['123', 'xxx']
      oFn.apply(this, args)
    } */
  }
}

class HttpClient {
  public url: any | undefined
  constructor() {}
  @getFn('http://')
  getData() {
    console.log('getData', this.apiUrl) // getData http://
  }
}

let a = new HttpClient()
console.log(a.apiUrl) // http://
a.getData()

// 修改方法，两个方法的值都会打印，先打印修改的，后打印原来的
// 替换方法：只打印覆盖的方法的内容
// a.getData(123, 'xx')
```

参数装饰器

参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数：

- 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象

- 参数的名字

- 参数在函数参数列表中的索引

```ts
function getParams(params: any) {
  return function (target: any, methodName: any, index: any) {
    console.log(params) // xxxx
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(index) // 0

    target.apiUrl = params
  }
}

class HttpClient {
  public url: any | undefined
  constructor() {}

  getData(@getParams('xxxx') id: any) {
    console.log(id) // 123
  }
}

var a = new HttpClient()
a.getData(123)
console.log(a.apiUrl) // xxxx
```

装饰器的执行顺序

- 执行顺序：<i style="color:red">属性装饰器 》方法装饰器 》参数装饰器 》类装饰器</i>

- 如果有多个同样的装饰器，它会先执行后面的装饰器

```ts
function logClass1(params: any) {
  return function (target: any) {
    console.log('类装饰器1')
  }
}
function logClass2(params: any) {
  return function (target: any) {
    console.log('类装饰器2')
  }
}
function logAttr(params?: any) {
  return function (tartet: any, attr: any) {
    console.log('属性装饰器')
  }
}
function logMethod(params?: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log('方法装饰器')
  }
}
function logParams1(params?: any) {
  return function (target: any, methodName: any, index: any) {
    console.log('参数装饰器1')
  }
}
function logParams2(params?: any) {
  return function (target: any, methodName: any, index: any) {
    console.log('参数装饰器2')
  }
}

@logClass1('1111')
@logClass2('2222')
class HttpClient {
  @logAttr()
  public apiUrl: string | undefined

  constructor() {}

  @logMethod()
  getData() {
    return true
  }
  setData(@logParams1() attr1: any, @logParams2() attr2: any) {}
}
// log：
// 属性装饰器
// 方法装饰器
// 参数装饰器2
// 参数装饰器1
// 类装饰器2
// 类装饰器1
```

## 声明文件

- 假如我们使用 script 标签全局引入了 jQuery，但是在 ts 中，编译器并不知道 \$ 或 jQuery 是什么东西，
  这时便可以是用 declare 来定义它的类型：

```ts
declare var $: (selector: string) => any
```

- 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件，声明文件必需以 <i style="color: red;">.d.ts</i> 为后缀

- 更推荐的是使用 <i style="color: red;">@types</i> 统一管理第三方库的声明文件 <i style="color: red;">`npm install @types/jquery --save-dev`</i>

## Thank you!
