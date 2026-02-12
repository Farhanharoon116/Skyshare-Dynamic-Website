// SkyShare Energy - JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form File Upload
    const fileInput = document.querySelector('.form-file');
    const fileName = document.querySelector('.file-name');
    
    if (fileInput && fileName) {
        fileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                fileName.textContent = e.target.files[0].name;
                fileName.style.display = 'block';
                fileName.style.marginTop = '12px';
                fileName.style.fontSize = '14px';
                fileName.style.color = '#0B3D2E';
                fileName.style.fontWeight = '600';
            }
        });
    }

    // Form Submission (Demo)
    const rooftopForm = document.getElementById('rooftopForm');
    
    if (rooftopForm) {
        rooftopForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message (demo)
            const formContainer = document.querySelector('.form-container');
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #0B3D2E;
                color: white;
                padding: 32px 48px;
                border-radius: 12px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            `;
            
            successMessage.innerHTML = `
                <h3 style="font-size: 24px; margin-bottom: 12px;">Thank You!</h3>
                <p style="font-size: 16px; margin-bottom: 24px;">Your rooftop registration has been received.<br>Our team will contact you within 24 hours.</p>
                <button onclick="this.parentElement.remove()" style="
                    padding: 12px 32px;
                    background: #FDB813;
                    color: #0B3D2E;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                ">Close</button>
            `;
            
            document.body.appendChild(successMessage);
            
            // Reset form
            rooftopForm.reset();
            if (fileName) fileName.style.display = 'none';
        });
    }

    // Contact Form Submission (Demo)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message (demo)
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #0B3D2E;
                color: white;
                padding: 32px 48px;
                border-radius: 12px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                max-width: 500px;
            `;
            
            successMessage.innerHTML = `
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin: 0 auto 16px;">
                    <circle cx="32" cy="32" r="28" stroke="#FDB813" stroke-width="3"/>
                    <path d="M20 32 L28 40 L44 24" stroke="#FDB813" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 style="font-size: 24px; margin-bottom: 12px;">Message Sent!</h3>
                <p style="font-size: 16px; margin-bottom: 24px;">Thank you for reaching out to SkyShare Energy.<br>We'll get back to you within 24 hours.</p>
                <button onclick="this.parentElement.remove()" style="
                    padding: 12px 32px;
                    background: #FDB813;
                    color: #0B3D2E;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                ">Close</button>
            `;
            
            document.body.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
        });
    }

    // "Request Contact" Button Click Handler
    const requestButtons = document.querySelectorAll('.project-card .btn-primary');
    
    requestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            
            const contactMessage = document.createElement('div');
            contactMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 40px;
                border-radius: 12px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                max-width: 500px;
            `;
            
            contactMessage.innerHTML = `
                <div style="margin-bottom: 24px;">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin: 0 auto;">
                        <circle cx="32" cy="32" r="28" fill="#FDB813" opacity="0.2"/>
                        <path d="M32 20 L32 32 L38 32" stroke="#0B3D2E" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="32" cy="32" r="12" stroke="#0B3D2E" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <h3 style="font-size: 24px; color: #0B3D2E; margin-bottom: 12px;">Contact Request Received</h3>
                <p style="font-size: 16px; color: #666; margin-bottom: 8px;">Project: <strong>${projectTitle}</strong></p>
                <p style="font-size: 14px; color: #666; margin-bottom: 32px;">Our team will share the property owner contact details within 2 business hours.</p>
                <button onclick="this.parentElement.remove()" style="
                    padding: 12px 32px;
                    background: #0B3D2E;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 15px;
                ">Got it</button>
            `;
            
            document.body.appendChild(contactMessage);
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 16px rgba(11, 61, 46, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('aos-animate');
                
                // Trigger counter animation if it's a stat number
                if (entry.target.classList.contains('stat-number') || 
                    entry.target.classList.contains('impact-number') ||
                    entry.target.classList.contains('mini-stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.benefit-card, .project-card, .vision-card, .value-item, .roadmap-item, .blog-card, .stat-item, .impact-card, .mini-stat');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        el.setAttribute('data-aos', 'fade-up');
        observer.observe(el);
    });

    // Counter Animation Function
    function animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const hasRs = text.includes('₨');
        const hasK = text.includes('K');
        const hasM = text.includes('M');
        const hasB = text.includes('B');
        const hasTons = text.includes('tons');
        const hasYears = text.includes('years');
        const hasMW = text.includes('MW');
        
        // Extract number
        let numText = text.replace(/[^0-9.]/g, '');
        let target = parseFloat(numText);
        
        if (isNaN(target)) return;
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            let display = current.toFixed(current < 10 ? 1 : 0);
            
            if (hasRs) display = '₨' + display;
            if (hasK) display += 'K';
            if (hasM) display += 'M';
            if (hasB) display += 'B';
            if (hasTons) display += 'K tons';
            if (hasYears) display += '+ years';
            if (hasMW) display += ' MW';
            if (hasPlus && !hasYears) display += '+';
            if (hasPercent) display += '%';
            
            element.textContent = display;
        }, duration / steps);
    }

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.project-card, .benefit-card, .blog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth reveal for stats on homepage
    const statNumbers = document.querySelectorAll('.stat-number, .impact-number, .mini-stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    // Add subtle parallax effect to hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Interactive project cards - enhanced click feedback
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(253, 184, 19, 0.3);
                width: 100px;
                height: 100px;
                margin-top: -50px;
                margin-left: -50px;
                animation: ripple 0.6s;
                pointer-events: none;
            `;
            ripple.style.left = e.clientX - card.getBoundingClientRect().left + 'px';
            ripple.style.top = e.clientY - card.getBoundingClientRect().top + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Blog card hover effect enhancement
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        const thumbnail = card.querySelector('.blog-thumbnail');
        if (thumbnail) {
            card.addEventListener('mouseenter', () => {
                thumbnail.style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', () => {
                thumbnail.style.transform = 'scale(1)';
            });
        }
    });
});
