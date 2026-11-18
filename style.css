/* Сброс стилей */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #333;
}

/* Контейнер для центрирования контента */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* --- ШАПКА --- */
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    color: #2e7d32;
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav a {
    text-decoration: none;
    color: #555;
    margin: 0 15px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav a:hover {
    color: #2e7d32;
}

.cart {
    font-weight: 600;
    cursor: pointer;
    background: #e8f5e9;
    padding: 10px 15px;
    border-radius: 20px;
    color: #2e7d32;
    transition: transform 0.2s;
}

.cart:hover {
    transform: scale(1.05);
}

/* --- БАННЕР (HERO) --- */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1600&auto=format&fit=crop') no-repeat center center/cover;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero h1 {
    font-size: 42px;
    margin-bottom: 20px;
    animation: fadeInDown 1s ease;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
    animation: fadeInUp 1s ease;
}

.cta-button {
    background-color: #2e7d32;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    animation: fadeInUp 1s ease;
}

.cta-button:hover {
    background-color: #1b5e20;
    transform: translateY(-3px);
}

/* --- КАТАЛОГ --- */
.catalog {
    padding: 60px 20px;
}

.section-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
    color: #222;
}

/* Сетка товаров (адаптивная) */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

/* Карточка товара */
.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

/* Анимация при наведении на карточку */
.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.product-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05); /* Зум картинки при наведении */
}

.product-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.product-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
}

.price {
    font-size: 22px;
    font-weight: 800;
    color: #2e7d32;
    margin-bottom: 15px;
}

.buy-btn {
    width: 100%;
    padding: 12px;
    background-color: #2e7d32;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: auto;
}

.buy-btn:hover {
    background-color: #1b5e20;
}

/* --- ПОДВАЛ --- */
.footer {
    background-color: #222;
    color: #aaa;
    text-align: center;
    padding: 30px 20px;
    margin-top: 40px;
}

/* --- АНИМАЦИИ --- */
@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- АДАПТИВНОСТЬ (ДЛЯ ТЕЛЕФОНОВ) --- */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        height: auto;
        padding: 15px 0;
        gap: 15px;
    }

    .nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    
    .nav a {
        margin: 0 5px;
        font-size: 14px;
    }

    .hero h1 {
        font-size: 28px;
    }

    .hero {
        height: 300px;
    }

    .section-title {
        font-size: 24px;
    }
}
