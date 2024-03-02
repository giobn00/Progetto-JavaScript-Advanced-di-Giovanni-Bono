import { displayResults } from "./utilis/displayResults";
import { displayError } from "./utilis/displayError";

document.getElementById('searchBtn').addEventListener('click', function(){
    let category = document.getElementById("input").value;
      let apiUrl = `https://openlibrary.org/subjects/${category}.json`;

      fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
            throw new Error('Category not found or no Books available');
        }
        return response.json();
        })
        .then(data => {
            if (!data.works || data.works.length === 0) {
                throw new Error('No Books available for this category');
            }
            displayResults(data.works);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError(error.message);
        });   
});



