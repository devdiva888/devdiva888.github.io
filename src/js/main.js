let currentSlide = 0;
const icons = [
    'fa-brands fa-html5',
    'fa-brands fa-css3-alt',
    'fa-brands fa-js',
    'fa-brands fa-square-git'
    'fa-brands fa-github'
];


function showSlide() {
    const carousel = 
    document.getElementById('carousel');
        carousel.innerHTML = ''; //clear previous icons


    icons.forEach((icon, index) => {
        const iconElement = document.createElement('i');

        iconElement.classList.add('carousel-icon', icon);
            if (index === currentSlide) {
                icon.style.display = 'inline-block';
            } else {
                icon.style.display = 'none';
        }

        carousel.appendChild(iconElement);
    });
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % icons.length; 
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + icons.length) % icons.length;
    showSlide();
}

showSlide();