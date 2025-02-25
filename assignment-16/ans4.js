//Creating Too Many Uncontrolled Timers
/*Issue:
If timers are created repeatedly without proper handling, it can lead to memory leaks.
*/
function createTimers() {
    setTimeout(() => {
      console.log("Running...");
      createTimers(); // Recursive call without control
    }, 1000);
  }
  
  createTimers(); // Runs indefinitely
  

  ///To preserve we just use a counter or flag to stop execution
  let count = 0;
const maxCount = 5;

function controlledTimers() {
  if (count < maxCount) {
    setTimeout(() => {
      console.log("Running...", count);
      count++;
      controlledTimers();
    }, 1000);
  }
}

controlledTimers(); // Stops after 5 iterations
