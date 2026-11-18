document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCounter = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Увеличиваем счетчик
            cartCount++;
            cartCounter.textContent = cartCount;

            // Визуальный эффект на кнопке
            const originalText = this.textContent;
            this.textContent = 'Добавлено! ✔️';
            this.style.backgroundColor = '#4caf50'; // Яркий зеленый

            // Возвращаем кнопку в исходное состояние через 1 секунду
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = ''; // Возвращаем цвет из CSS
            }, 1000);
            
            // Небольшая анимация счетчика
            cartCounter.parentElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cartCounter.parentElement.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
