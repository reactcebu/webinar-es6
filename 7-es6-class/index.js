// Creating a class without using ES6 class syntax
function Person(name) {
  this.name = name || 'Adam'
}

// Adding functionality to the prototype
Person.prototype.sayName = function() {
  return this.name
}

// Adding functionality to the prototype
Person.prototype.greet = function() {
  return `Good day! May name is ${this.name}`
}



// Creating a class using ES6 class syntax
class Person {
  constructor(name) {
    this.name = name || 'Adam'
  }

  sayName() {
    return this.name
  }

  greet() {
    return `Good day! May name is ${this.name}`
  }
}
