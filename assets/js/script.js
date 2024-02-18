document.getElementById('searchBtn').addEventListener('click', function(){
    let category = document.getElementById("input").value;
      let apiUrl = `https://openlibrary.org/subjects/${category}.json`;
    
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.works))
        .catch(error => console.error('Error fetching data:', error));
        
});

/**
 * Displays the results in the result container based on the works array.
 *
 * @param {Array} works - the array of works to display
 * @return {undefined} 
 */
function displayResults(works) {
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";

    works.forEach(work => {
        let title = work.title;
        let authors = work.authors ? work.authors.map(author => author.name).join(', ') : 'N/A';

        let bookElement = document.createElement("div");
        bookElement.classList.add("BookInfo");
      bookElement.innerHTML =  `<strong>${title}</strong>
                                <p>Authors: ${authors}</p>
                                <button class="BookInfo-btn" onclick="getBookDescription('${work.key}')">View Description</button>`;
      resultContainer.appendChild(bookElement);
    });
  }
  /**
   * Retrieves the book description from the specified URL and alerts the description.
   *
   * @param {type} key - description of the key parameter
   * @return {type} undefined - no return value
   */
  function getBookDescription(key) {
    let descriptionUrl = `https://openlibrary.org${key}.json`;

    fetch(descriptionUrl)
      .then(response => response.json())
      .then(data => alert(data.description))
      .catch(error => console.error('Error fetching description:', error));
  }