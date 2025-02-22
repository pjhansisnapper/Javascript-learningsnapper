let x; // Declared but not assigned
console.log(x); // Output: undefined

function test() {
  let a;
  console.log(a); // Output: undefined
}
test();

function test() {
    console.log(b); // ❌ ReferenceError: b is not defined
  }
  test();
  