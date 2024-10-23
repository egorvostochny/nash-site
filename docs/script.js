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
