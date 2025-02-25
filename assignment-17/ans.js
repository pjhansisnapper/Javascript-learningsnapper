const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 700 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 }
  ];
  
  // Using filter and map
  const affordableProducts = products
    .filter(product => product.price <= 500) // Filters products priced at $500 or less
    .map(product => product.name.toLowerCase()); // Converts product names to lowercase
  
  console.log(affordableProducts); // Output: [ 'mouse', 'keyboard', 'monitor' ]
  