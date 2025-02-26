// Promise-based function
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong! Status: " + response.status);
            }
            return response.json();
        })
        .then(data => console.log("Fetched data:", data))
        .catch(error => console.log("Error:", error.message));
}

// Call the function
fetchData("https://jsonplaceholder.typicode.com/posts/1");


//------------------- Converting to async/await ----------------
async function fetchDataAsync(url) {
    try {
        let response = await fetch(url); // No need for 'import fetch'
        if (!response.ok) {
            throw new Error("Something went wrong! Status: " + response.status);
        }
        let data = await response.json(); // Waits for JSON conversion
        console.log("Fetched data:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Call the function
fetchDataAsync("https://jsonplaceholder.typicode.com/posts/1");



