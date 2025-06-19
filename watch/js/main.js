// Countdown timer for promotion
function updateCountdown() {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 12);
    
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carica i prodotti dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    
    const products = [
        {
            id: 1,
            name: "Rolex Submariner",
            price: "€9.500",
            description: "Orologio subacqueo iconico, acciaio inossidabile, impermeabile fino a 300m.",
            brand: "Rolex",
            stock: "Disponibile",
            images: [
                "images/products/rolex-1.jpg",
                "images/products/rolex-2.jpg",
                "images/products/rolex-3.jpg",
                "images/products/rolex-4.jpg",
                "images/products/rolex-5.jpg",
                "images/products/rolex-6.jpg"
            ]
        },
        {
            id: 2,
            name: "Omega Speedmaster",
            price: "€6.200",
            description: "Il leggendario orologio della NASA, movimento cronografo meccanico.",
            brand: "Omega",
            stock: "Disponibile",
            images: [
                "images/products/omega-1.jpg",
                "images/products/omega-2.jpg",
                "images/products/omega-3.jpg",
                "images/products/omega-4.jpg",
                "images/products/omega-5.jpg",
                "images/products/omega-6.jpg"
            ]
        },
        {
            id: 3,
            name: "Patek Philippe Calatrava",
            price: "€22.000",
            description: "Eleganza senza tempo, cassa in oro bianco 18k, movimento automatico.",
            brand: "Patek Philippe",
            stock: "Ultimo pezzo",
            images: [
                "images/products/patek-1.jpg",
                "images/products/patek-2.jpg",
                "images/products/patek-3.jpg",
                "images/products/patek-4.jpg",
                "images/products/patek-5.jpg",
                "images/products/patek-6.jpg"
            ]
        },
        {
            id: 4,
            name: "Tag Heuer Carrera",
            price: "€4.800",
            description: "Design sportivo, movimento cronografo automatico, vetro zaffiro.",
            brand: "Tag Heuer",
            stock: "Disponibile",
            images: [
                "images/products/tagheuer-1.jpg",
                "images/products/tagheuer-2.jpg",
                "images/products/tagheuer-3.jpg",
                "images/products/tagheuer-4.jpg",
                "images/products/tagheuer-5.jpg",
                "images/products/tagheuer-6.jpg"
            ]
        }
    ];
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let slidesHTML = '';
        let indicatorsHTML = '';
        
        product.images.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            slidesHTML += `
                <div class="product-slide ${activeClass}">
                    <img src="${img}" alt="${product.name} - vista ${index + 1}">
                </div>
            `;
            
            const indicatorActive = index === 0 ? 'active' : '';
            indicatorsHTML += `<div class="slide-indicator ${indicatorActive}" data-slide="${index}"></div>`;
        });
        
        productCard.innerHTML = `
            <div class="product-img-container">
                <div class="product-slideshow" data-id="${product.id}">
                    ${slidesHTML}
                    <div class="slide-indicators">
                        ${indicatorsHTML}
                    </div>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-price">${product.price}</span>
                <p class="product-details">${product.description}</p>
                <div class="product-meta">
                    <span class="product-brand">${product.brand}</span>
                    <span class="product-stock">${product.stock}</span>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
});