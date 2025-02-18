document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.fade-in-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('visible'); // Добавляем класс при появлении в области видимости
                observer.unobserve(image); // Останавливаем наблюдение после появления
            }
        });
    });

    observer.observe(image); // Начинаем наблюдение за изображением
});
