// Curried function to add three numbers
const add = (a) => (b) => (c) => a + b + c;

// Usage
console.log(add(2)(3)(5)); // Output: 10
