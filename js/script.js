// ==================== Theme Toggle ====================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference. If none, default to dark mode on first load
let savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
    // No preference saved yet — default to dark mode and persist it
    savedTheme = 'dark';
    try { localStorage.setItem('theme', 'dark'); } catch (e) {}
}

function applyDarkModeClass(enabled) {
    // Apply class to both html and body to ensure CSS variables take effect
    if (enabled) {
        document.documentElement.classList.add('dark-mode');
        if (document.body) document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark-mode');
        if (document.body) document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
    }
}

applyDarkModeClass(savedTheme === 'dark');

// ==================== Typing Animation (Home Tagline) ====================
const typingPhrases = [
    'Full Stack Developer',
    "BCA Student",
    'Python Enthusiast'
];

function startTyping(elId = 'typed', speed = 80, pause = 1200) {
    const el = document.getElementById(elId);
    if (!el) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const current = typingPhrases[phraseIndex];
        if (!deleting) {
            el.textContent = current.slice(0, ++charIndex);
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(tick, pause);
                return;
            }
        } else {
            el.textContent = current.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            }
        }
        setTimeout(tick, deleting ? speed / 2 : speed);
    }

    tick();
}

// ==================== Projects: Filter + Modal ====================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projects.forEach(p => {
                const cats = (p.dataset.category || '').split(' ');
                if (filter === 'all' || cats.includes(filter)) {
                    p.style.display = '';
                } else {
                    p.style.display = 'none';
                }
            });
        });
    });

    // Modal + Carousel logic
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTech = document.getElementById('modalTech');
    const modalLive = document.getElementById('modalLive');
    const modalGit = document.getElementById('modalGit');
    const carouselTrack = modal.querySelector('.carousel-track');
    const prevBtn = modal.querySelector('.carousel-prev');
    const nextBtn = modal.querySelector('.carousel-next');
    const indicators = modal.querySelector('.carousel-indicators');

    let currentSlide = 0;
    let slideCount = 0;
    let lastFocusedElement = null;

    function buildSlidesFromCard(card) {
        const imgs = Array.from(card.querySelectorAll('img'))
            .map(i => ({ src: i.src, alt: i.alt || card.dataset.title || '' }));
        // If no images discovered, use a fallback based on title
        if (imgs.length === 0) {
            imgs.push({ src: '', alt: card.dataset.title || 'Project image' });
        }
        return imgs;
    }

    function renderCarousel(slides) {
        carouselTrack.innerHTML = '';
        indicators.innerHTML = '';
        slideCount = slides.length;
        slides.forEach((s, idx) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-roledescription', 'slide');
            slide.setAttribute('aria-label', `${idx + 1} of ${slides.length}`);

            const img = document.createElement('img');
            img.src = s.src;
            img.alt = s.alt;
            slide.appendChild(img);
            carouselTrack.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = '';
            dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
            dot.addEventListener('click', () => { goToSlide(idx); });
            indicators.appendChild(dot);
        });
        currentSlide = 0;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
        // update indicators
        Array.from(indicators.children).forEach((b, i) => {
            b.classList.toggle('active', i === currentSlide);
        });
        // set aria-hidden on slides
        Array.from(carouselTrack.children).forEach((s, i) => {
            s.setAttribute('aria-hidden', i === currentSlide ? 'false' : 'true');
        });
    }

    function prevSlide() { currentSlide = (currentSlide - 1 + slideCount) % slideCount; updateCarousel(); }
    function nextSlide() { currentSlide = (currentSlide + 1) % slideCount; updateCarousel(); }
    function goToSlide(i) { currentSlide = Math.max(0, Math.min(i, slideCount - 1)); updateCarousel(); }

    // Open modal: populate content and build carousel
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (!card) return;
            lastFocusedElement = document.activeElement;

            const title = card.dataset.title || '';
            const desc = card.dataset.desc || '';
            const techs = (card.dataset.tech || '').split(',').filter(Boolean);
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalTech.innerHTML = '';
            techs.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = t;
                modalTech.appendChild(span);
            });
            const gitLink = card.querySelector('a[target="_blank"][href*="github.com"]');
            modalGit.href = gitLink ? gitLink.href : '#';
            modalLive.href = card.querySelector('a[data-live]') ? (card.querySelector('a[data-live]').getAttribute('data-live') || '#') : '#';

            const slides = buildSlidesFromCard(card);
            renderCarousel(slides);

            // show modal
            modal.setAttribute('aria-hidden', 'false');
            // focus management
            const focusTarget = modal.querySelector('.modal-close') || modal;
            focusTarget.focus();
            // add keyboard handlers while modal open
            document.addEventListener('keydown', keyboardHandler);
        });
    });

    // Close modal with restore
    const modalClose = modal.querySelector('.modal-close');
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    function keyboardHandler(e) {
        if (modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'Tab') {
            // simple focus trap
            const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', keyboardHandler);
        // restore focus
        try { if (lastFocusedElement) lastFocusedElement.focus(); } catch (e) {}
    }
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    // Toggle based on current state; ensure both html and body updated
    applyDarkModeClass(!isDarkMode);
    try { localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light'); } catch (e) {}
    // Update aria-pressed
    themeToggle.setAttribute('aria-pressed', (!isDarkMode).toString());
});

// ==================== Mobile Navigation ====================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    const isActive = !navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Update accessibility attributes
    const expanded = navToggle.classList.contains('active') ? 'true' : 'false';
    navToggle.setAttribute('aria-expanded', expanded);
    navMenu.setAttribute('aria-hidden', expanded === 'false' ? 'true' : 'false');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
    });
});

// Make navbar sticky / add scrolled class for visual changes
const navbar = document.querySelector('.navbar');
function handleScroll() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);

// ==================== Smooth Scrolling ====================

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

// ==================== Resume Data ====================

const resumeData = {
    name: 'Sneh',
    email: 'popatsneh7@gmail.com',
    phone: '+91 9512590277',
    location: 'India',
    skills: ['Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Data Analysis', 'Git'],
    summary: 'Full Stack Developer & BCA Student with expertise in web development and data analysis'
};

// Load resume data on page load
function loadResumeData() {
    document.getElementById('resumeName').textContent = `Name: ${resumeData.name}`;
    document.getElementById('resumeEmail').textContent = `Email: ${resumeData.email}`;
    const phoneEl = document.getElementById('resumePhone');
    if (phoneEl) phoneEl.textContent = `Phone: ${resumeData.phone}`;
    
    const skillsContainer = document.getElementById('resumeSkills');
    skillsContainer.innerHTML = '';
    resumeData.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'tech-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

// ==================== Form Validation ====================

const contactForm = document.getElementById('contactForm');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(formData) {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        group.querySelector('.error-message').textContent = '';
    });
    
    // Validate name
    if (formData.name.trim() === '') {
        setError('name', 'Name is required');
        isValid = false;
    } else if (formData.name.trim().length < 2) {
        setError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (formData.email.trim() === '') {
        setError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(formData.email)) {
        setError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (formData.message.trim() === '') {
        setError('message', 'Message is required');
        isValid = false;
    } else if (formData.message.trim().length < 10) {
        setError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function setError(fieldName, errorMessage) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    const formGroup = field.parentElement;
    
    formGroup.classList.add('error');
    errorElement.textContent = errorMessage;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    if (validateForm(formData)) {
        // Show success message
        alert(`Thank you for your message, ${formData.name}! This is a frontend form, so no data is being sent anywhere. In a real application, this would be submitted to a backend server.`);
        
        // Reset form
        contactForm.reset();
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
    }
});

// Real-time validation for form fields
const formInputs = document.querySelectorAll('#name, #email, #message');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (input.id === 'name') {
            if (input.value.trim() === '') {
                formGroup.classList.add('error');
                errorElement.textContent = 'Name is required';
            } else if (input.value.trim().length < 2) {
                formGroup.classList.add('error');
                errorElement.textContent = 'Name must be at least 2 characters';
            } else {
                formGroup.classList.remove('error');
                errorElement.textContent = '';
            }
        } else if (input.id === 'email') {
            if (input.value.trim() === '') {
                formGroup.classList.add('error');
                errorElement.textContent = 'Email is required';
            } else if (!validateEmail(input.value)) {
                formGroup.classList.add('error');
                errorElement.textContent = 'Please enter a valid email address';
            } else {
                formGroup.classList.remove('error');
                errorElement.textContent = '';
            }
        } else if (input.id === 'message') {
            if (input.value.trim() === '') {
                formGroup.classList.add('error');
                errorElement.textContent = 'Message is required';
            } else if (input.value.trim().length < 10) {
                formGroup.classList.add('error');
                errorElement.textContent = 'Message must be at least 10 characters';
            } else {
                formGroup.classList.remove('error');
                errorElement.textContent = '';
            }
        }
    });
    
    input.addEventListener('focus', () => {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        // Only clear if the user is now interacting with it
        if (input.value.trim() !== '') {
            formGroup.classList.remove('error');
            errorElement.textContent = '';
        }
    });
});

// ==================== Scroll Animation ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and elements for scroll animation
document.querySelectorAll('.skill-card, .project-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Active Navigation Link ====================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styling in CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// ==================== Initialization ====================

document.addEventListener('DOMContentLoaded', () => {
    loadResumeData();
    
    // Initialize accessibility attributes for mobile menu
    if (navMenu) navMenu.setAttribute('aria-hidden', navMenu.classList.contains('active') ? 'false' : 'true');
    if (navToggle) navToggle.setAttribute('aria-expanded', navToggle.classList.contains('active') ? 'true' : 'false');

    // Add a little delay for better UX
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Start typing animation for hero tagline
    startTyping('typed');

    // Staggered reveal for hero items (avoid if reduced motion)
    try {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const items = document.querySelectorAll('.hero-content .reveal-item');
            items.forEach(item => {
                const delay = parseFloat(item.dataset.delay) || 0;
                setTimeout(() => item.classList.add('visible'), delay * 1000);
            });
        } else {
            // If user prefers reduced motion, make all visible immediately
            document.querySelectorAll('.hero-content .reveal-item').forEach(i => i.classList.add('visible'));
        }
    } catch (e) {
        // ignore
    }
});

// Initialize project filters & modal after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
});

// ==================== Parallax Effect ====================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ==================== Keyboard Navigation ====================

document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key.toLowerCase() === 't' && e.ctrlKey) {
        e.preventDefault();
        themeToggle.click();
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Accessibility - Skip to Content ====================

const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-to-content';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    z-index: 2000;
    border-radius: 0 0 4px 0;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ==================== Performance Optimization ====================

// Lazy load images if any are added in the future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Page Load Performance ====================

// Log when page is fully loaded
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    
    // You can add performance metrics here if needed
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    }
});
