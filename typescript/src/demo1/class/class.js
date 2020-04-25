"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        return this.name + " say hello";
    };
    return Person;
}());
var person = new Person('Maggie');
person.say(); // Maggie say hello
