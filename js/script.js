// ==================== Theme Toggle ====================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
});

// ==================== Mobile Navigation ====================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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
    phone: '+91 XXXXXXXXXX',
    location: 'India',
    skills: ['Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Data Analysis', 'Git'],
    summary: 'Full Stack Developer & BCA Student with expertise in web development and data analysis'
};

// Load resume data on page load
function loadResumeData() {
    document.getElementById('resumeName').textContent = `Name: ${resumeData.name}`;
    document.getElementById('resumeEmail').textContent = `Email: ${resumeData.email}`;
    
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
    
    // Add a little delay for better UX
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
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
