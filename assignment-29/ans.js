function fetchQuotes() {
    fetch("https://dummyjson.com/quotes")
    .then(response => response.json())
    .then(data => {
        let quotesHTML = "";
        for (let i = 0; i < data.quotes.length; i++) {
            quotesHTML += `<p>"${data.quotes[i].quote}" - ${data.quotes[i].author}</p>`;
        }
        document.getElementById("quotes").innerHTML = quotesHTML;
    })
    .catch(error => {
        console.log("Error fetching data: ", error);
        document.getElementById("quotes").innerHTML = "Failed to load quotes.";
    });
}

fetchQuotes();
