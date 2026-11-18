document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            alert(`Вы добавили ${productName} веник в корзину!`);
        });
    });
});
