function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        navLinks.style.flexDirection = 'row';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #eee';
    }
}

// Window resize handler to reset menu if needed
window.addEventListener('resize', () => {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.padding = '0';
        navLinks.style.width = 'auto';
    } else if (navLinks.style.display === 'flex' && navLinks.style.position !== 'absolute') {
        navLinks.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                document.getElementById('navLinks').style.display = 'none';
            }
        }
    });
});

// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial state for scroll reveal
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
});

// Trigger immediately for hero
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
});