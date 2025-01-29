document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
}); 