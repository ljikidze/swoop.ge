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


// Function to load translations from JSON
async function loadTranslations() {
    const response = await fetch('home page.json');
    const translations = await response.json();
    return translations;
}

// Language switch function
async function switchLanguage(language) {
    // Load the translation JSON
    const translations = await loadTranslations();

    // Get all elements that need to be translated
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute('data-translate'); // Get the translation key
        element.textContent = translations[language][key];  // Update the text content
    });

    // Update the placeholder for the search input
    const searchInput = document.getElementById('searchInput');
    searchInput.setAttribute('placeholder', translations[language]['searchPlaceholder']);
}

//cookies
