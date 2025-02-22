function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const person1 = new Person("jhansi", 23);
  const person2 = new Person("jai", 21);
  
  person1.greet(); // "Hello, my name is jhansi and I am 25 years old."
  person2.greet(); // "Hello, my name is jai and I am 21 years old."
  