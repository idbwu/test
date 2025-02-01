ddocument.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    // Сохраняем выбранную тему
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
                text: isRussian ? 'Здесь ты можешь узнать обо мне и моих проектах.' : 'Here you can learn about me and my projects.',
            },
            about: {
                title: isRussian ? 'Обо мне' : 'About Me',
                text: isRussian ? 'Привет, меня зовут Эмиль. Я программист, занимающийся созданием различных проектов в сфере технологий.' : 'Hello, my name is Emil. I am a programmer working on various projects in technology.',
            },
            social: {
                title: isRussian ? 'Мои соцсети' : 'My Social Media',
                links: isRussian ? [
                    { name: 'ВКонтакте', url: 'https://vk.com/idbwu' },
                    { name: 'Instagram', url: 'https://www.instagram.com/iamemilen' },
                    { name: 'Telegram', url: 'https://t.me/idbwu' },
                    { name: 'Telegram канал', url: 'https://t.me/tripletp' },
                ] : [
                    { name: 'VK', url: 'https://vk.com/idbwu' },
                    { name: 'Instagram', url: 'https://www.instagram.com/iamemilen' },
                    { name: 'Telegram', url: 'https://t.me/idbwu' },
                    { name: 'Telegram Channel', url: 'https://t.me/tripletp' },
                ]
            },
            vpn: {
                title: isRussian ? 'AmneziaVPN' : 'AmneziaVPN',
                text: isRussian ? 'Получите доступ к моему VPN-сервису IDBWUNS VPN для защиты ваших данных и анонимности в интернете.' : 'Get access to my IDBWUNS VPN service for protecting your data and anonymity online.',
                linkText: isRussian ? 'Подробнее о IDBWUNS VPN' : 'More about IDBWUNS VPN',
                linkUrl: 'https://t.me/IDBWUNS_VPN',
            },
            contact: {
                title: isRussian ? 'Контакты' : 'Contact',
                text: isRussian ? 'Можешь связаться со мной через email: idbwuns@gmail.com' : 'You can contact me via email: idbwuns@gmail.com',
            }
        };

        // Обновляем все тексты
        document.querySelector('.hero-title').textContent = texts.hero.title;
        document.querySelector('.hero-text').textContent = texts.hero.text;
        document.querySelector('.section-title').textContent = texts.about.title;
        document.querySelector('.section-text').textContent = texts.about.text;

        // Соцсети
        const socialSectionTitle = document.querySelector('#social .section-title');
        socialSectionTitle.textContent = texts.social.title;

        const socialLinks = document.querySelector('#social .social-links');
        socialLinks.innerHTML = '';
        texts.social.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.classList.add('social-link');
            a.textContent = link.name;
            li.appendChild(a);
            socialLinks.appendChild(li);
        });

        // VPN
        const vpnSectionTitle = document.querySelector('#vpn .section-title');
        vpnSectionTitle.textContent = texts.vpn.title;
        const vpnText = document.querySelector('#vpn .section-text');
        vpnText.textContent = texts.vpn.text;
        const vpnLink = document.querySelector('#vpn .cta-button');
        vpnLink.textContent = texts.vpn.linkText;
        vpnLink.href = texts.vpn.linkUrl;

        // Контакты
        const contactSectionTitle = document.querySelector('#contact .section-title');
        contactSectionTitle.textContent = texts.contact.title;
        const contactText = document.querySelector('#contact .section-text');
        contactText.innerHTML = texts.contact.text;
    });
});
