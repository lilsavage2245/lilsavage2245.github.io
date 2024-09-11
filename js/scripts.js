document.addEventListener('DOMContentLoaded', () => {#
    // Toggle dark theme
    const button = document.getElementById('toggleButton');
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            if (!email) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }

});