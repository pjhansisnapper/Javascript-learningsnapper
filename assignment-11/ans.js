function createCounter() {
    let count = 0; // This is the private variable

    return function() {
        count++; // This inner function has access to the outer function's variables
        console.log(count);
    };
}

const counter = createCounter();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
