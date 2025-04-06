document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    next.addEventListener('click', () => {
        carousel.scrollBy({ left: 450, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        carousel.scrollBy({ left: -450, behavior: 'smooth' });
    });
});
