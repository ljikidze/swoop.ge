let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Show the current slide
    slides[currentSlideIndex].style.display = 'block';
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

// Initial slide display
showSlide(currentSlideIndex);


