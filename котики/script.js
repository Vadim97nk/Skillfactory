document.getElementById('loadButton').addEventListener('click', function() {
  document.getElementById('loader').style.display = 'inline-block';
  fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(data => {
      document.getElementById('loader').style.display = 'none';
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = '';
      data.forEach(cat => {
        const image = document.createElement('img');
        image.src = cat.url;
        image.alt = 'Картинки котиков';
        image.classList.add('image');
        gallery.appendChild(image);
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      document.getElementById('loader').style.display = 'none';
    });
});
