/* MEMOIZATION: it stores the results of expensive function calls and returns 
                the cached result when the same inputs occur again.

*/ // Explaining here with example of fibonacci series

// Memoization function to cache results
function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args); // Create unique key for the input arguments
  
      if (cache[key]) {
        // Return cached result if available
        console.log(`Fetching from cache for input ${args}`);
        return cache[key];
      }
  
      // Calculate and store result if not cached
      console.log(`Calculating result for input ${args}`);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  
  //  Recursive Fibonacci function
  function fibonacci(n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
  
  //  Apply memoization
  const memoizedFibonacci = memoize(fibonacci);
  
  //  Test
  console.log(memoizedFibonacci(10)); // Output: 55
  console.log(memoizedFibonacci(40)); // Fast due to memoization
  