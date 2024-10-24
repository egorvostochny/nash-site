document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');
    const searchToggle = document.getElementById('search-toggle');
    const searchForm = document.getElementById('search-form');

    // Открытие бокового меню
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Закрытие бокового меню при клике на затемнение
    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Поиск
    searchToggle.addEventListener('click', function() {
        searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
        if (searchForm.style.display === 'block') {
            document.getElementById('search-input').focus();
        }
    });

    // Логика обработки поиска
    document.getElementById('search-submit').addEventListener('click', function() {
        const query = document.getElementById('search-input').value;
        alert(`Поиск по запросу: ${query}`);
        // Здесь можно добавить функциональность поиска по сайту
    });
});

let currentSlide = 0;

let currentIndex = 0; // Индекс текущей карточки
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Кнопки
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

// Функция обновления карусели
function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 20; // Ширина карточки плюс отступы
    const newTransformValue = -currentIndex * itemWidth; // Обновляем значение трансформации
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}px)`;
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Инициализация
updateCarousel();
