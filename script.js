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

document.querySelectorAll('.login-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginModal').style.display = 'block';
    document.querySelector('.wrapper').classList.add('active-popup');
  });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // adjust threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});


function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};


// Search box js
document.getElementById("searchForm").addEventListener('submit', function(event) {
    event.preventDefault();// prevent page reload
    const query =
document.getElementById('searchInput').value;
    alert("You searched for: " + query);
    // You can replace alert() with logic to search your content
    });






// Open modal on any .login-btn click
document.querySelectorAll('.login-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loginModal').style.display = 'block';
        document.querySelector('.wrapper').classList.add('active-popup');
    });
});

// Close modal on close button
document.getElementById('closeLoginModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
    document.querySelector('.wrapper').classList.remove('active-popup');
};

// Close modal when clicking outside the modal box
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    const wrapper = document.querySelector('.wrapper');
    if (event.target === modal) {
        modal.style.display = 'none';
        wrapper.classList.remove('active-popup');
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

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('action', 'login');
    formData.append('email', document.getElementById('loginEmail').value);
    formData.append('password', document.getElementById('loginPassword').value);
    
    fetch('auth_handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('loginMessage');
        messageDiv.textContent = data.message;
        messageDiv.className = 'message ' + (data.success ? 'success' : 'error');
        messageDiv.style.display = 'block';
        
        if (data.success) {
            // Update UI to show logged in state
            updateLoginState(data.user);
            setTimeout(() => {
                document.getElementById('loginModal').style.display = 'none';
                document.querySelector('.wrapper').classList.remove('active-popup');
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const messageDiv = document.getElementById('loginMessage');
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
    });
});

// Handle register form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('action', 'register');
    formData.append('name', document.getElementById('registerName').value);
    formData.append('email', document.getElementById('registerEmail').value);
    formData.append('password', document.getElementById('registerPassword').value);
    
    fetch('auth_handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('registerMessage');
        messageDiv.textContent = data.message;
        messageDiv.className = 'message ' + (data.success ? 'success' : 'error');
        messageDiv.style.display = 'block';
        
        if (data.success) {
            // Switch to login form after successful registration
            setTimeout(() => {
                document.querySelector('.wrapper').classList.remove('active');
                document.getElementById('registerMessage').style.display = 'none';
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const messageDiv = document.getElementById('registerMessage');
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
    });
});

// Function to update UI when user is logged in
function updateLoginState(user) {
    // Update login buttons to show user info
    document.querySelectorAll('.login-btn').forEach(btn => {
        btn.innerHTML = `<span>Welcome, ${user.name}</span>`;
        btn.onclick = function() {
            // Show user menu or logout option
            if (confirm('Do you want to logout?')) {
                logout();
            }
        };
    });
}

// Logout function
function logout() {
    fetch('logout.php')
    .then(() => {
        location.reload();
    });
}

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    fetch('check_login.php')
    .then(response => response.json())
    .then(data => {
        if (data.logged_in) {
            updateLoginState(data.user);
        }
    });
});