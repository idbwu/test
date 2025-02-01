// Переключение темы
const themeToggleButton = document.getElementById('theme-toggle');
const languageToggleButton = document.getElementById('language-toggle');
const body = document.body;

// Сменить тему
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Переключение языка
languageToggleButton.addEventListener('click', () => {
    toggleLanguage();
});

let isRussian = true;

// Функция для переключения языка
function toggleLanguage() {
    if (isRussian) {
        changeToEnglish();
    } else {
        changeToRussian();
    }
    isRussian = !isRussian;
}

// Функция для переключения на русский язык
function changeToRussian() {
    document.querySelector('.hero-title').innerText = 'Добро пожаловать на мой сайт!';
    document.querySelector('.hero-text').innerText = 'Здесь ты можешь узнать обо мне, моих проектах и связаться со мной.';
    document.querySelector('.cta-button').innerText = 'Узнать больше';
    document.querySelector('.section-title').innerText = 'Обо мне';
    document.querySelector('.section-text').innerText = 'Привет, меня зовут Эмиль! Я увлекаюсь программированием. Здесь ты можешь найти информацию обо мне и моих проектах.';
    document.querySelector('.footer-text').innerText = '© 2025 ТРОЙНОЕ ПРОНИКНОВЕНИЕ. Все права защищены.';
    document.querySelectorAll('.social-link')[0].innerText = 'ВКонтакте';
    document.querySelectorAll('.social-link')[1].innerText = 'Instagram';
    document.querySelectorAll('.social-link')[2].innerText = 'Telegram';
    document.querySelectorAll('.social-link')[3].innerText = 'Telegram канал';
    languageToggleButton.innerText = 'EN';
}

// Функция для переключения на английский язык
function changeToEnglish() {
    document.querySelector('.hero-title').innerText = 'Welcome to my website!';
    document.querySelector('.hero-text').innerText = 'Here you can learn about me, my projects, and contact me.';
    document.querySelector('.cta-button').innerText = 'Learn More';
    document.querySelector('.section-title').innerText = 'About Me';
    document.querySelector('.section-text').innerText = 'Hello, my name is Emil! I am into programming. Here you can find information about me and my projects.';
    document.querySelector('.footer-text').innerText = '© 2025 TRIPLE INTRUSION. All rights reserved.';
    document.querySelectorAll('.social-link')[0].innerText = 'VKontakte';
    document.querySelectorAll('.social-link')[1].innerText = 'Instagram';
    document.querySelectorAll('.social-link')[2].innerText = 'Telegram';
    document.querySelectorAll('.social-link')[3].innerText = 'Telegram Channel';
    languageToggleButton.innerText = 'RU';
}
