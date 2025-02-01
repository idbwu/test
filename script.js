// Переключение темы
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Сменить тему
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
