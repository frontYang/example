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
