document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID цели
        const targetElement = document.querySelector(targetId); // Находим элемент
        const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset; // Рассчитываем позицию

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});