export function displayError(errorMessage) {
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `<div class="error">${errorMessage}</div>`;
  }
  
