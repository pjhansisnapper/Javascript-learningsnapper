//1. In browsers, it logs the `window` object
console.log(this);

//2.Object method: this refers to object that owns the method
const user = {
  name: "Jhansi",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // "Hello, my name is Jhansi"


//3. constructor function:this refers to the newly created object.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const person1 = new Person("jhansi", 23);
  const person2 = new Person("jai", 21);
  
  person1.greet(); // "Hello, my name is jhansi and I am 23 years old."
  person2.greet(); // "Hello, my name is jai and I am 21 years old."
  
//4. Arrowfunction:  inherit this from the surrounding lexical scope.
const person = {
  name: "Jhansi",
  age: 23,
  greet: () => {
    console.log(`Hello, my name is ${this.name}`); // `this` is undefined in strict mode or refers to `window`
  },
};

person.greet(); // "Hello, my name is undefined"

//6. this in event listeners
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btn");

  if (button) {
      // Using a regular function
      button.addEventListener("click", function () {
          console.log(this); // `this` refers to the button element
          this.style.backgroundColor = "blue"; // Changes button color on click
      });

      // Using an arrow function (for comparison)
      button.addEventListener("click", () => {
          console.log(this); // `this` refers to `window`, not the button
      });
  } else {
      console.warn("Button with id 'btn' not found.");
  }
});