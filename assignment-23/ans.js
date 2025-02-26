const person = {
    name: "Jhansi",
    greet: function(age, city) {
        console.log(`Hello, my name is ${this.name}, I am ${age} years old and I live in ${city}.`);
    }
};

person.greet.call({ name: "Alice" }, 25, "New York"); 
// Output: Hello, my name is Alice, I am 25 years old and I live in New York.
person.greet.apply({ name: "Bob" }, [30, "London"]);
// Output: Hello, my name is Bob, I am 30 years old and I live in London.
const boundGreet = person.greet.bind({ name: "Charlie" }, 28, "Berlin");
boundGreet(); 
// Output: Hello, my name is Charlie, I am 28 years old and I live in Berlin.

