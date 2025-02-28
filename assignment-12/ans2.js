/*Anonymous Function:Anonymous functions are functions that are declared without a name. 
They are often used as arguments to other functions or assigned to variables.
*/

// Anonymous function assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!

// Anonymous function used as an argument
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);
