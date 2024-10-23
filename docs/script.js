console.log("Добро пожаловать на мой сайт!");
// Получаем элементы
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close');

// Открытие модального окна при клике на кнопку
contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрытие модального окна при клике на "крестик"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Переключаем класс dark на элементе body
    body.classList.toggle('dark');

    // Меняем иконку кнопки
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '🌞'; // Иконка солнца для дневной темы
    } else {
        themeToggle.textContent = '🌙'; // Иконка луны для ночной темы
    }
});
