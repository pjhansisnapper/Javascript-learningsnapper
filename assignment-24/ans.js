function fetchData(url) {
    return fetch(url) // Make a request to the URL (promise)
        .then(response => {
            // Check if the request was successful (status 200-299)
            if (!response.ok) {
                throw new Error("Something went wrong! Status: " + response.status);
            }
            return response.json(); // Convert response to JSON
        })
        .catch(error => {
            console.log("Error:", error.message); // Print any errors
        });
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => {
        if (data) {
            console.log("Fetched data:", data); // Show data if successful
        }
    });
