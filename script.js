document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'Темная тема' : 'Светлая тема';
    this.textContent = currentTheme;
});

document.getElementById('language-toggle').addEventListener('click', function() {
    const isRussian = document.documentElement.lang === 'ru';
    document.documentElement.lang = isRussian ? 'en' : 'ru';

    const text = isRussian ? 'EN' : 'RU';
    this.textContent = text;

    // Здесь можно добавлять смену текста на всех элементах в зависимости от языка.
    document.querySelector('.hero-title').textContent = isRussian ? 'Welcome to my site!' : 'Добро пожаловать на мой сайт!';
    document.querySelector('.hero-text').textContent = isRussian ? 'Here you can learn about me, my projects and contact me.' : 'Здесь ты можешь узнать обо мне, моих проектах и связаться со мной.';
    // Добавьте аналогичные изменения для других текстов на сайте.
});
