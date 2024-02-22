/**
 * Retrieves the description of a book using the provided key.
 *
 * @param {string} key - The key used to fetch the book description
 * @return {void} 
 */
export function getBookDescription(key) {
    let descriptionUrl = `https://openlibrary.org${key}.json`;

    fetch(descriptionUrl)
      .then(response => response.json())
      .then(data => alert(data.description))
      .catch(error => console.error('Error fetching description:', error));
  }