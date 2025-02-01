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
    document.querySelectorAll('.section-title')[0].innerText = 'Обо мне';
    document.querySelectorAll('.section-title')[1].innerText = 'Мои соцсети';
    document.querySelectorAll('.section-title')[2].innerText = 'AmneziaVPN';
    document.querySelectorAll('.section-title')[3].innerText = 'Контакты';
    document.querySelector('.hero-title').innerText = 'Добро пожаловать на мой сайт!';
    document.querySelector('.hero-text').innerText = 'Здесь ты можешь узнать обо мне, моих проектах и связаться со мной.';
    document.querySelector('.cta-button').innerText = 'Узнать больше';
    document.querySelector('.section-text').innerText = 'Привет, меня зовут Эмиль! Я увлекаюсь программированием. Здесь ты можешь найти информацию обо мне и моих проектах.';
    document.querySelector('.section-text').innerText = 'Безопасность в сети — это важно. Получите доступ к моему VPN-сервису IDBWUNS VPN для защиты ваших данных, обхода блокировок и анонимности в интернете.';
    document.querySelector('.cta-button').innerText = 'Подробнее о IDBWUNS VPN';
    document.querySelector('.footer p').innerText = '© 2025 ТРОЙНОЕ ПРОНИКНОВЕНИЕ. Все права защищены.';
    document.querySelector('.social-link:nth-child(1)').innerText = 'ВКонтакте';
    document.querySelector('.social-link:nth-child(2)').innerText = 'Instagram';
    document.querySelector('.social-link:nth-child(3)').innerText = 'Telegram';
    document.querySelector('.social-link:nth-child(4)').innerText = 'Telegram канал';
}

// Функция для переключения на английский язык
function changeToEnglish() {
    document.querySelectorAll('.section-title')[0].innerText = 'About Me';
    document.querySelectorAll('.section-title')[1].innerText = 'My Social Networks';
    document.querySelectorAll('.section-title')[2].innerText = 'AmneziaVPN';
    document.querySelectorAll('.section-title')[3].innerText = 'Contacts';
    document.querySelector('.hero-title').innerText = 'Welcome to my website!';
    document.querySelector('.hero-text').innerText = 'Here you can learn about me, my projects, and contact me.';
    document.querySelector('.cta-button').innerText = 'Learn More';
    document.querySelector('.section-text').innerText = 'Hello, my name is Emil! I am into programming. Here you can find information about me and my projects.';
    document.querySelector('.section-text').innerText = 'Online security is important. Get access to my VPN service IDBWUNS VPN for data protection, bypassing blocks, and anonymity online.';
    document.querySelector('.cta-button').innerText = 'More about IDBWUNS VPN';
    document.querySelector('.footer p').innerText = '© 2025 TRIPLE INTRUSION. All rights reserved.';
    document.querySelector('.social-link:nth-child(1)').innerText = 'VKontakte';
    document.querySelector('.social-link:nth-child(2)').innerText = 'Instagram';
    document.querySelector('.social-link:nth-child(3)').innerText = 'Telegram';
    document.querySelector('.social-link:nth-child(4)').innerText = 'Telegram Channel';
}
