/*First class function: In js functions are firstclass-citizens, this means functions can be assigned to variables,
passed as arguments and returned from other functions.
*/
function greet(name) {
    return `Hello, ${name}!`;
}

// Assigning a function to a variable
const sayHello = greet;

// Passing a function as an argument
function executeFunction(fn, value) {
    return fn(value);
}

console.log(executeFunction(sayHello, "Alice")); // Output: Hello, Alice!
