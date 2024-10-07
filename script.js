let currentSlide = 0;
const images = [
    'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Little_cute_gray_kitten_closeup_124917_.jpg', // Первое изображение
    'https://i.artfile.ru/2880x1800_729861_[www.ArtFile.ru].jpg', // Второе изображение
    'https://pic.rutubelist.ru/video/20/1d/201da8c2e84b0ada0e7ea4943cb05775.jpg'  // Третье изображение
];

function showSlide(index) {
    const slide = document.getElementById('slide');
    const slideInfo = document.getElementById('slide-info');
    
    // Зацикливание
    currentSlide = (index + images.length) % images.length;

    // Обновление источника изображения
    slide.src = images[currentSlide];
    
    // Обновление информации о слайде
    slideInfo.textContent = `Изображение ${currentSlide + 1} из ${images.length}`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


showSlide(currentSlide);
