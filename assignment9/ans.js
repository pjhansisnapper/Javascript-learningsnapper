// Temporal Dead Zone (TDZ) starts for x here
// console.log(x); //  Uncaught ReferenceError: Cannot access 'x' before initialization

let x = 9; //  TDZ ends for x
console.log(x); //  9

// Temporal Dead Zone (TDZ) starts for y here
// console.log(y); //  Uncaught ReferenceError: Cannot access 'y' before initialization
const y = 10; //  TDZ ends for y
console.log(y); //  10

// No TDZ issue here because 'xx' is declared before use
const xx = 12;
console.log(xx);  //12