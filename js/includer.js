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

loadContent('sharedComponents/navbar.html', 'navbar');
loadContent('sharedComponents/hero.html', 'hero');
loadContent('sharedComponents/footer.html', 'footer');
