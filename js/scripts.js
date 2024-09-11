document.addEventListener('DOMContentLoaded', () => {
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

    // Back to top button functionality
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
