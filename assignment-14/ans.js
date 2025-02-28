console.log("Start");

setTimeout(function() {
    console.log("Timeout Callback");
}, 2000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log("Fetch Callback", data))
    .catch(error => console.log("Fetch Error", error));

console.log("End");
