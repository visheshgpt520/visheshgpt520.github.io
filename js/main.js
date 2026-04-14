document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            
            if(targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 70, // offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 13, 23, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 243, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(11, 13, 23, 0.7)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        }
    });

    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-element');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger CSS transition
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Typewriter effect for Hero Subtitle
    const typewriterEl = document.querySelector('.typewriter');
    if(typewriterEl) {
        const text = typewriterEl.innerHTML;
        typewriterEl.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                // Check if it's an HTML entity (like &gt;)
                if(text.charAt(i) === '&') {
                    let entity = '&';
                    i++;
                    while(text.charAt(i) !== ';' && i < text.length) {
                        entity += text.charAt(i);
                        i++;
                    }
                    entity += ';';
                    typewriterEl.innerHTML += entity;
                } else {
                    typewriterEl.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 50);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
});
