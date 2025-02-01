document.addEventListener('DOMContentLoaded', function() {
    // Тема
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    // Сохранение выбранной темы
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Светлая тема';
    }

    // Переключение темы
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const currentTheme = document.body.classList.contains('dark-theme') ? 'Темная тема' : 'Светлая тема';
        themeToggle.textContent = currentTheme;
        localStorage.setItem('theme', currentTheme === 'Темная тема' ? 'dark' : 'light');
    });

    // Переключение языка
    languageToggle.addEventListener('click', function() {
        const isRussian = document.documentElement.lang === 'ru';
        document.documentElement.lang = isRussian ? 'en' : 'ru';
        languageToggle.textContent = isRussian ? 'RU' : 'EN';

        const texts = {
            hero: {
                title: isRussian ? 'Добро пожаловать на мой сайт!' : 'Welcome to my site!',
                text: isRussian ? 'Здесь ты можешь узнать обо мне, моих проектах и связаться со мной.' : 'Here you can learn about me, my projects and contact me.',
            },
            about: {
                title: isRussian ? 'Обо мне' : 'About Me',
                text: isRussian ? 'Привет, меня зовут Эмиль! Я увлекаюсь программированием. Здесь ты можешь найти информацию обо мне и моих проектах.' : 'Hello, my name is Emil! I am passionate about programming. Here you can find information about me and my projects.',
            },
            vpn: {
                title: isRussian ? 'AmneziaVPN' : 'AmneziaVPN',
                text: isRussian ? 'Безопасность в сети — это важно. Получите доступ к моему VPN-сервису IDBWUNS VPN для защиты ваших данных, обхода блокировок и анонимности в интернете.' : 'Security online is crucial. Get access to my IDBWUNS VPN service for data protection, bypassing blocks, and online anonymity.',
            },
            contact: {
                title: isRussian ? 'Контакты' : 'Contact',
                text: isRussian ? 'Ты можешь связаться со мной по электронной почте: idbwuns@gmail.com' : 'You can contact me via email: idbwuns@gmail.com',
            }
        };

        document.querySelector('.hero-title').textContent = texts.hero.title;
        document.querySelector('.hero-text').textContent = texts.hero.text;
        document.querySelector('.section-title').textContent = texts.about.title;
        document.querySelector('.section-text').textContent = texts.about.text;
    });
});
