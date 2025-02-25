//3. Forgetting to Clear Timeouts
let timer = setTimeout(() => {
    console.log("This message might not be needed");
  }, 5000);
  
  clearTimeout(timer); // Cancels the timeout
///Solution:   Always store the timeout ID and clear it if needed.  

