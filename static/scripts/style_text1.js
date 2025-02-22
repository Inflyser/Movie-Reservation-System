const textElement = document.getElementById('text');
const text = "Cinema Smart";
let index = 0;

function animateText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index); // Добавляем следующую букву
        index++;
        setTimeout(animateText, 150); // Задержка между символами (100 мс)
    }
}

animateText(); // Запускаем анимацию