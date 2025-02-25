//1. Losing this Context in a Method
const obj = {
    name: "Example",
    greet: function () {
      setTimeout(function () {
        console.log("Hello, " + this.name);
      }, 1000);
    },
  };
  
  obj.greet(); // Output: Hello, undefined

  //to preserve we use an arrow function.
  const obj2 = {
    name: "Example",
    greet: function () {
      setTimeout(() => {
        console.log("Hello, " + this.name);
      }, 1000);
    },
  };
  
  obj2.greet(); // Output: Hello, Example
  