let x = 10; // Global scope

function test() {
    let x = 20; // Local scope (shadows global x)
    console.log(x); // ✅ Outputs: 20 (local x is used)
}

test();
console.log(x); // ✅ Outputs: 10 (global x remains unchanged)

/*function example() {
    let x = 10;
    var x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared
    console.log(x);
}
example(); 
 //reason is--- Using var to declare a variable with the same name inside a let scope is illegal.
*/
