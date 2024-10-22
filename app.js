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
    

// Автоматическое переключение слайдов
let autoSlideInterval = setInterval(showNextSlide, 2000); // 4 секунды

// Остановка автоматического переключения при наведении
slider.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Возобновление автоматического переключения при уводе курсора
slider.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(showNextSlide, 4000);
});






// Работа с виджетом recaptcha
// 1. Получить ответ гугл капчи
var captcha = grecaptcha.getResponse();

// 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// Такую форму не будем отправлять на сервер.
if (!captcha.length) {
  // Выводим сообщение об ошибке
  $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
} else {
  // получаем элемент, содержащий капчу
  $('#recaptchaError').text('');
}

// 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
if ((formValid) && (captcha.length)) {

  // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
  formData.append('g-recaptcha-response', captcha);

}

// 4. Если сервер вернул ответ error, то делаем следующее...
// Сбрасываем виджет reCaptcha
grecaptcha.reset();
// Если существует свойство msg у объекта $data, то...
if ($data.msg) {
  // вывести её в элемент у которого id=recaptchaError
  $('#recaptchaError').text($data.msg);
}

