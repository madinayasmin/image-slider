const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.slider-image');

let currentIndex = 0;

function updateSlider() {
  // Скрыть все изображения
  images.forEach((image, index) => {
    image.classList.remove('active');
    dots[index].classList.remove('active');
  });

  // Показать текущее изображение
  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению, циклически
  updateSlider();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему изображению, циклически
  updateSlider();
}

function jumpToImage(index) {
  currentIndex = index;
  updateSlider();
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Обработчики событий для навигационных точек
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    jumpToImage(parseInt(dot.getAttribute('data-index')));
  });
});

// Инициализация слайдера
updateSlider();
