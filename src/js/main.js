let currentSlide = 0;
const icons =
document.querySelectorAll('.carousel i')

function showSlide() {
    icons.forEach((icon, index) => {
        if (index === currentSlide) {
            icon.style.display = 'inline-block';
        } else {
            icon.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = 
    (currentSlide + 1) % icons.length; 
    showSlide();
}

function prevSlide() {
    currentSlide =
    (currentSlide - 1 + icons.length) % icons.length;
    showSlide();
}

showSlide();