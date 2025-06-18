// Carosello automatico per ogni orologio
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-slideshow').forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.product-slide');
        const indicators = slideshow.querySelectorAll('.slide-indicator');
        let currentSlide = 0;
        
        // Funzione per mostrare una slide specifica
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }
        
        // Avvia il carosello automatico
        let slideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 2000);
        
        // Pausa al passaggio del mouse
        slideshow.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slideshow.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                let nextSlide = (currentSlide + 1) % slides.length;
                showSlide(nextSlide);
            }, 2000);
        });
        
        // Navigazione tramite indicatori
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
    });
});