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

// Fix for mobile Safari viewport height changes
// This ensures the left border decoration stays at the bottom when URL bar appears/disappears
function fixMobileSafariViewport() {
    const leftBorder = document.querySelector('.left-border-decoration');
    if (!leftBorder) return;
    
    function setHeight() {
        // Use window.innerHeight which accounts for browser UI
        const vh = window.innerHeight * 0.7;
        leftBorder.style.setProperty('height', vh + 'px', 'important');
        
        // Detect if we're on iOS Safari
        const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if (isIOSSafari) {
            // For iOS Safari, the image needs to sit flush with the bottom
            // The constant gap suggests we need a small negative offset
            // Try -2px to eliminate the gap (adjust this value if needed)
            leftBorder.style.setProperty('bottom', '-2px', 'important');
        } else {
            // For other browsers, position at the bottom
            leftBorder.style.setProperty('bottom', '0px', 'important');
        }
    }
    
    // Set initial height with a small delay to ensure viewport is stable
    setTimeout(setHeight, 100);
    setHeight();
    
    // Update on resize and orientation change
    window.addEventListener('resize', () => {
        setTimeout(setHeight, 50);
    });
    window.addEventListener('orientationchange', () => {
        setTimeout(setHeight, 200);
    });
    
    // For iOS Safari, listen to scroll and touch events which can trigger viewport changes
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setHeight();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    window.addEventListener('touchmove', updateOnScroll, { passive: true });
    
    // Also update when the page becomes visible (user returns to tab)
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            setTimeout(setHeight, 100);
        }
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixMobileSafariViewport);
} else {
    fixMobileSafariViewport();
}

// Console welcome message
console.log('%c💚 Sophie & Greg\'s Wedding 💚', 'color: #005229; font-size: 18px; font-weight: bold;');
console.log('%cMade with care for our special day', 'color: #8b7355; font-size: 14px;');
