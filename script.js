function myFunction() {
    document.getElementById("demo").innerHTML = "08136293002";
}

console.log("Hello, World!");




document.getElementById('openLoginModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
};
document.getElementById('closeLoginModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
};
window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


/*...existing code...
document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.getElementById('testimonialSlides');
    const slides = slidesContainer.querySelectorAll('div');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const indicators = document.getElementById('testimonialIndicators');
    let currentIndex = 0;

    // Create indicators
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        indicators.appendChild(dot);
    });

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.querySelectorAll('.dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToSlide(idx) {
        currentIndex = idx;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    // Optional: swipe support for touch devices
    let startX = 0;
    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    slidesContainer.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) prevBtn.click();
        else if (startX - endX > 50) nextBtn.click();
    });
});
// ...existing code... */

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector('.testimonial-slidesContainer');
    const slides = slidesContainer.querySelectorAll('div');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const indicators = document.getElementById('testimonialIndicators');
    let currentIndex = 0;

    // Remove <br> nodes from slidesContainer (if any)
    slidesContainer.querySelectorAll('br').forEach(br => br.remove());

    // Create indicators
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        indicators.appendChild(dot);
    });

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.querySelectorAll('.dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToSlide(idx) {
        currentIndex = idx;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    // Optional: swipe support for touch devices
    let startX = 0;
    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    slidesContainer.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) prevBtn.click();
        else if (startX - endX > 50) nextBtn.click();
    });

    // Initialize position
    updateSlider();
});