let x = 10; // Global scope

function test() {
    let x = 20; // Local scope (shadows global x)
    console.log(x); // ✅ Outputs: 20 (local x is used)
}

test();
console.log(x); // ✅ Outputs: 10 (global x remains unchanged)
