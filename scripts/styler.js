document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-in-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс при появлении в области видимости
                entry.target.classList.remove('hidden'); // Убираем класс скрытия
            } else {
                entry.target.classList.remove('visible'); // Убираем класс видимости
                entry.target.classList.add('hidden'); // Добавляем класс скрытия
            }
        });
    });

    images.forEach(image => {
        observer.observe(image); // Начинаем наблюдение за каждым изображением
    });
});

