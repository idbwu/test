document.addEventListener("DOMContentLoaded", function() {
    // Плавный скроллинг при клике на ссылку
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Корректировка для фиксированного меню
                behavior: 'smooth'
            });
        });
    });
});
