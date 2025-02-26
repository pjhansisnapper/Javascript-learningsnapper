// Constructor function for a Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an instance
const person1 = new Person("Alice", 25);
person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
