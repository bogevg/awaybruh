const slider = document.querySelector('.photo-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

updateSlider();

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
	if (index === slideIndex) {
	    slide.style.display = 'block';
	} else {
	    slide.style.display = 'none';
	}
	});
}

//открытие на полный экран
function openFullscreenImage(element) {
	const fullscreenContainer = document.getElementById('fullscreen-container');
	const fullscreenImage = document.getElementById('fullscreen-image');
	
	fullscreenImage.src = element.src;
	fullscreenContainer.style.display = 'block';
}

function closeFullscreenImage() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}
    

