let x = 5;

function first() {
    let x = 10;

    function second() {
        console.log(x); //Finds x in first() scope, NOT global scope
    }

    second();
}

first(); // Output: 10
