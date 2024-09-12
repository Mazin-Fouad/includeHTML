function loadContent(path, elementId) {
  fetch(path, { cache: 'no-cache' }) // Optional: prevents caching
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${path}:`, error));
}

loadContent('navba.html', 'navbar');
loadContent('hero.html', 'hero');
loadContent('footer.html', 'footer');
