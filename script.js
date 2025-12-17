const images = document.querySelectorAll('.contenedor-galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const cerrar = document.querySelector('.cerrar')

images.forEach(img => {
    img.addEventListener('click', () =>{
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

cerrar.addEventListener('click', () =>{
    lightbox.style.display = 'none';
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});