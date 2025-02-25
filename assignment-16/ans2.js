//2. setTimeout Inside a Loop (Closure Issue)
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  
  // Output (after 1 second): 4, 4, 4
 // Use let instead of var to create a block-scoped variable to preserve .
 for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  
  // Output (after 1 second): 1, 2, 3
  