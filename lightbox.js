// Lightbox per immagini ingrandite
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const counter = document.getElementById('lightbox-counter');
    
    // Variabili per gestire la navigazione nella lightbox
    let currentLightboxSlideshow = null;
    let currentLightboxIndex = 0;
    let totalSlides = 0;
    
    // Apri la lightbox quando si clicca su un'immagine
    document.querySelectorAll('.product-slide img').forEach(img => {
        img.addEventListener('click', function() {
            const slideshow = this.closest('.product-slideshow');
            const slides = slideshow.querySelectorAll('.product-slide');
            const slidesArray = Array.from(slides);
            const imgIndex = slidesArray.indexOf(this.closest('.product-slide'));
            
            // Aggiorna la lightbox con l'immagine corrente
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Salva il contesto per la navigazione
            currentLightboxSlideshow = slideshow;
            currentLightboxIndex = imgIndex;
            totalSlides = slides.length;
            
            // Aggiorna il contatore
            counter.textContent = `${currentLightboxIndex + 1}/${totalSlides}`;
        });
    });
    
    // Chiudi la lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Chiudi la lightbox con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigazione nella lightbox
    prevBtn.addEventListener('click', () => {
        if (!currentLightboxSlideshow) return;
        
        const slides = currentLightboxSlideshow.querySelectorAll('.product-slide');
        currentLightboxIndex = (currentLightboxIndex - 1 + slides.length) % slides.length;
        const prevImg = slides[currentLightboxIndex].querySelector('img');
        
        lightboxImg.src = prevImg.src;
        lightboxImg.alt = prevImg.alt;
        counter.textContent = `${currentLightboxIndex + 1}/${totalSlides}`;
    });
    
    nextBtn.addEventListener('click', () => {
        if (!currentLightboxSlideshow) return;
        
        const slides = currentLightboxSlideshow.querySelectorAll('.product-slide');
        currentLightboxIndex = (currentLightboxIndex + 1) % slides.length;
        const nextImg = slides[currentLightboxIndex].querySelector('img');
        
        lightboxImg.src = nextImg.src;
        lightboxImg.alt = nextImg.alt;
        counter.textContent = `${currentLightboxIndex + 1}/${totalSlides}`;
    });
    
    // Navigazione con frecce
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
});