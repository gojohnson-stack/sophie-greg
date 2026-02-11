// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar border on scroll
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 82, 41, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.detail-card, .schedule-item, .lodging-section, .transportation-section, .things-section');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add active state styling for nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-text);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Hide tree decorations on mobile devices; show again when resizing back to desktop
function hideTreesOnMobile() {
    const leftTree = document.querySelector('.left-border-decoration');
    const rightTree = document.querySelector('.right-border-decoration');
    
    if (!leftTree || !rightTree) return;
    
    // Detect mobile devices (user agent only - let CSS media query handle narrow windows)
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobileDevice) {
        leftTree.style.display = 'none';
        rightTree.style.display = 'none';
    } else {
        // Desktop: remove inline display so CSS (and media query) control visibility
        leftTree.style.display = '';
        rightTree.style.display = '';
    }
}

// Run on page load and resize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideTreesOnMobile);
} else {
    hideTreesOnMobile();
}

window.addEventListener('resize', hideTreesOnMobile);

// Console welcome message
console.log('%c💚 Sophie & Greg\'s Wedding 💚', 'color: #005229; font-size: 18px; font-weight: bold;');
console.log('%cMade with care for our special day', 'color: #8b7355; font-size: 14px;');
