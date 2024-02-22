import { getBookDescription } from "./getBookDescription";

/**
 * Display the results of the works in the result container.
 *
 * @param {Array} works - The array of works to display
 * @return {void} 
 */
export function displayResults(works) {
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";

    works.forEach(work => {
        let title = work.title;
        let authors = work.authors ? work.authors.map(author => author.name).join(', ') : 'N/A';

        let bookElement = document.createElement("div");
        bookElement.classList.add("BookInfo");
      bookElement.innerHTML =  `<strong>${title}</strong>
                                <p>Authors: ${authors}</p>
                                <button class="BookInfo-btn" type="button">View Description</button>`;
                                // Add event listener for the "view description" button
                                bookElement.querySelector('.BookInfo-btn').addEventListener('click', () => {
                                    getBookDescription(work.key);
                                })
      resultContainer.appendChild(bookElement);
    });
  }

