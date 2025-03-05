// Shallow Copy Example
const person = { name: "John", age: 30 };
const shallowCopy = person; // just copying the reference

shallowCopy.age = 40;

console.log("Shallow Copy:");
console.log("Original person:", person); // age is 40 (changed)
console.log("Shallow copy:", shallowCopy);


// Deep Copy Example
const car = { brand: "Toyota", year: 2020 };
const deepCopy = { ...car }; // copying the values

deepCopy.year = 2025;

console.log("\nDeep Copy:");
console.log("Original car:", car); // year is 2020 (unchanged)
console.log("Deep copy:", deepCopy);


// Shallow Copy with Array
const numbers = [1, 2, 3];
const shallowArrayCopy = numbers; // copying the reference

shallowArrayCopy[0] = 99;

console.log("\nShallow Array Copy:");
console.log("Original numbers:", numbers); // [99, 2, 3]
console.log("Shallow copy:", shallowArrayCopy);


// Deep Copy with Array
const fruits = ["apple", "banana"];
const deepArrayCopy = [...fruits]; // copying the values

deepArrayCopy[0] = "orange";

console.log("\nDeep Array Copy:");
console.log("Original fruits:", fruits); // ["apple", "banana"]
console.log("Deep copy:", deepArrayCopy);
