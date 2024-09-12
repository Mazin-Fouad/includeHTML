function loadContent(path, elementId) {
  // Optional: prevents caching
  fetch(path, { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${path}: ${error.message}`));
}

loadContent('htmlPages/navbar.html', 'navbar');
loadContent('htmlPages/hero.html', 'hero');
loadContent('htmlPages/footer.html', 'footer');
