// Sample array of numbers
const numbers = [3, 5, 7, 9, 11, 13, 15];

// Step 1: Double each number using map()
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Step 2: Filter numbers greater than 10
const filteredNumbers = doubledNumbers.filter(num => num > 10);
console.log("Filtered Numbers (greater than 10):", filteredNumbers);

// Step 3: Find the sum of the filtered numbers using reduce()
const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Filtered Numbers:", sum);
