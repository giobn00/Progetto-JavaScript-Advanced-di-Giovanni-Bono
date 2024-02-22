import { displayResults } from "./utilis/displayResults";

document.getElementById('searchBtn').addEventListener('click', function(){
    let category = document.getElementById("input").value;
      let apiUrl = `https://openlibrary.org/subjects/${category}.json`;
    
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.works))
        .catch(error => console.error('Error fetching data:', error));
        
});



