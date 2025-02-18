document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.fade-in-text');

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

    texts.forEach(text => {
        observer.observe(text); // Начинаем наблюдение за каждым текстовым блоком
    });
});
