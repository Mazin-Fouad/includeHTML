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

loadContent('navbar.html', 'navbar');
loadContent('hero.html', 'hero');
loadContent('footer.html', 'footer');
