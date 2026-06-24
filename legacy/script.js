/* ==========================================================================
   Rafie Habibi - Portfolio Scripts (JS)
   ========================================================================== */

// 1. Tailwind CSS Runtime Configuration
tailwind.config = {
    darkMode: 'class', // Enables class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                accent: '#f97316', 
                accentDark: '#ea580c', 
                bgmain: '#ffffff', 
                bgsec: '#f9fafb', 
                textmain: '#111827', 
                textmuted: '#4b5563', 
                bordercolor: '#e5e7eb',
                
                // Tailwind custom dark mode colors (complements Tailwind's built-in ones)
                darkBgmain: '#0b0f19',
                darkBgsec: '#111827',
                darkTextmain: '#f3f4f6',
                darkTextmuted: '#9ca3af',
                darkBordercolor: '#1f2937',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
};

// 2. Main DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS Animation (if script is available)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out',
            once: true, 
            offset: 100, 
        });
    }

    // Initialize Sub-Features
    initDarkMode();
    initTypingEffect();
    initScrollSpy();
    initMobileMenu();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initNavbarScrollEffect();
});

/* ==========================================================================
   Feature: Dark/Light Mode Theme Toggle
   ========================================================================== */
function initDarkMode() {
    const desktopBtn = document.getElementById('theme-toggle');
    const mobileBtn = document.getElementById('theme-toggle-mobile');
    
    if (!desktopBtn && !mobileBtn) return;

    // Check Local Storage or System Preference
    const userPrefersDark = localStorage.getItem('theme') === 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = userPrefersDark || (!localStorage.getItem('theme') && systemPrefersDark);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcons(isDark);

    // Toggle Theme Click Event handler
    const handleThemeToggle = () => {
        const currentlyDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', currentlyDark ? 'dark' : 'light');
        updateThemeIcons(currentlyDark);
    };

    if (desktopBtn) {
        desktopBtn.addEventListener('click', handleThemeToggle);
    }
    if (mobileBtn) {
        mobileBtn.addEventListener('click', handleThemeToggle);
    }
}

function updateThemeIcons(isDark) {
    const desktopIcon = document.getElementById('theme-toggle-icon');
    const mobileIcon = document.getElementById('theme-toggle-icon-mobile');
    
    const iconClass = isDark ? 'ph ph-sun text-2xl' : 'ph ph-moon text-2xl';
    
    if (desktopIcon) {
        desktopIcon.className = iconClass;
    }
    if (mobileIcon) {
        mobileIcon.className = iconClass;
    }
}

/* ==========================================================================
   Feature: Typing Text Effect (Hero Section)
   ========================================================================== */
function initTypingEffect() {
    const typeTarget = document.getElementById('typing-text');
    if (!typeTarget) return;

    const words = [
        "IoT Developer",
        "Embedded Systems Builder",
        "Computer Engineering Student",
        "IoT Developer & Embedded Systems Builder"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150; // Delay between keystrokes

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeTarget.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 75; // Faster deletion
        } else {
            typeTarget.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 150; // Normal typing speed
        }

        // Add cursor style element if needed (custom CSS handles cursor blinking via container class)
        
        if (!isDeleting && charIndex === currentWord.length) {
            delay = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500; // Pause before typing next word
        }

        setTimeout(type, delay);
    }

    // Start typing
    type();
}

/* ==========================================================================
   Feature: Intersection Observer Scroll Spy
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active middle portion
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Feature: Navbar Background Scroll Effect
   ========================================================================== */
function initNavbarScrollEffect() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

/* ==========================================================================
   Feature: Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu ? menu.querySelectorAll('a') : [];

    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking links
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
            menu.classList.add('hidden');
        }
    });
}

/* ==========================================================================
   Feature: Dynamic Projects Filter
   ========================================================================== */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-container');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-accent', 'text-white', 'border-accent');
                btn.classList.add('bg-white', 'text-textmain', 'border-bordercolor', 'dark:bg-darkBgsec', 'dark:text-darkTextmain', 'dark:border-darkBordercolor');
            });

            // Add active class to clicked button
            button.classList.add('bg-accent', 'text-white', 'border-accent');
            button.classList.remove('bg-white', 'text-textmain', 'border-bordercolor', 'dark:bg-darkBgsec', 'dark:text-darkTextmain', 'dark:border-darkBordercolor');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const tags = card.getAttribute('data-tags').split(' ');
                
                if (filterValue === 'all' || tags.includes(filterValue)) {
                    // Show item
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide item
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   Feature: AJAX Formspree Contact Form Submission
   ========================================================================== */
function initContactForm() {
    const form = document.querySelector('form');
    if (!form) return;

    // Create Toast Container on the fly if not present
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Form Validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            showToast('Please fill out all required fields.', 'error');
            return;
        }

        // Email Format Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        // If URL contains YOUR_ID_HERE, warning the user
        const actionUrl = form.getAttribute('action');
        if (actionUrl.includes('YOUR_ID_HERE')) {
            showToast('Form action URL is not configured. Please supply a valid Formspree endpoint.', 'error');
            return;
        }

        // Update button status to loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ph ph-circle-notch animate-spin mr-2"></i> Sending...';

        try {
            const formData = new FormData(form);
            const response = await fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                showToast('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
            } else {
                // Server responded with error status
                const data = await response.json();
                if (data.errors) {
                    showToast(data.errors.map(err => err.message).join(', '), 'error');
                } else {
                    showToast('Oops! There was a problem submitting your form.', 'error');
                }
            }
        } catch (error) {
            // Network or CORS issue
            showToast('Could not connect to submission server. Check network connection.', 'error');
        } finally {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');
    if (!container) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon
    const iconClass = type === 'success' ? 'ph-fill ph-check-circle text-emerald-500' : 'ph-fill ph-x-circle text-rose-500';
    
    toast.innerHTML = `
        <div class="mr-3 text-2xl flex items-center justify-center">
            <i class="${iconClass}"></i>
        </div>
        <div class="text-sm font-semibold">${message}</div>
    `;

    container.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Fade out and remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

/* ==========================================================================
   Feature: Back to Top Floating Button
   ========================================================================== */
function initBackToTop() {
    // Check if button already exists in HTML, if not create it
    let backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'back-to-top';
        backToTopBtn.className = 'w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accentDark shadow-lg border-2 border-white dark:border-darkBordercolor focus:outline-none';
        backToTopBtn.setAttribute('title', 'Back to Top');
        backToTopBtn.innerHTML = '<i class="ph ph-caret-double-up text-2xl font-bold"></i>';
        document.body.appendChild(backToTopBtn);
    }

    // Scroll listener to show/hide button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
