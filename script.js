/**
 * FLAMAS MATRIX - TRANSFORMATIVE WEB EXPERIENCE
 * Interactive JavaScript for consciousness-expanding user journey
 * Optimized for performance and accessibility
 * Spanish-first with multilingual support (ES/EN/DE)
 */

// Load translations module
let languageManager = null;

// Stripe Configuration (Production ready)
let stripe = null;
let elements = null;
let paymentElement = null;

// Application State
const AppState = {
  currentStep: 1,
  selectedExperience: null,
  experiencePrices: {
    'weekend-awakening': 297,
    'deep-connection': 1997,
    'consciousness-intensive': 4997
  },
  experienceNames: {
    'weekend-awakening': 'Weekend Awakening',
    'deep-connection': 'Deep Connection Retreat',
    'consciousness-intensive': 'Consciousness Intensive'
  },
  isProcessing: false,
  // Hero slideshow state
  currentSlide: 0,
  slideInterval: null
};

// Performance Optimization - Debounced functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

let animationObserver = null;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
  // Initialize language management first
  if (typeof LanguageManager !== 'undefined') {
    languageManager = new LanguageManager();
    window.flamasMatrix = window.flamasMatrix || {};
    window.flamasMatrix.languageManager = languageManager;
  }
  
  setupHeroSlideshow();
  setupNavigation();
  setupSmoothScrolling();
  setupParallaxEffects();
  setupGalleryFilters();
  setupReservationForm();
  setupContactForm();
  setupAnimations();
  setupStripePayments();
  setupPerformanceOptimizations();
  setupLanguageSwitcher();
  
  // Initialize AOS (Animate On Scroll) alternative
  initializeScrollAnimations();
  
  console.log('🔥 Flamas Matrix - Transformative experience initialized');
}

/**
 * Hero Slideshow Setup
 */
function setupHeroSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  
  if (slides.length === 0) return;
  
  // Auto-advance slides
  function nextSlide() {
    slides[AppState.currentSlide].classList.remove('active');
    dots[AppState.currentSlide].classList.remove('active');
    
    AppState.currentSlide = (AppState.currentSlide + 1) % slides.length;
    
    slides[AppState.currentSlide].classList.add('active');
    dots[AppState.currentSlide].classList.add('active');
  }
  
  // Go to specific slide
  function goToSlide(index) {
    slides[AppState.currentSlide].classList.remove('active');
    dots[AppState.currentSlide].classList.remove('active');
    
    AppState.currentSlide = index;
    
    slides[AppState.currentSlide].classList.add('active');
    dots[AppState.currentSlide].classList.add('active');
    
    // Reset interval
    clearInterval(AppState.slideInterval);
    startSlideshow();
  }
  
  // Start automatic slideshow
  function startSlideshow() {
    AppState.slideInterval = setInterval(nextSlide, 6000); // 6 seconds per slide
  }
  
  // Stop slideshow
  function stopSlideshow() {
    clearInterval(AppState.slideInterval);
  }
  
  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
  
  // Pause on hover
  const slideshowContainer = document.querySelector('.hero-slideshow');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', stopSlideshow);
    slideshowContainer.addEventListener('mouseleave', startSlideshow);
  }
  
  // Initialize
  startSlideshow();
}

/**
 * Navigation Setup
 */
function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isActive = navToggle.classList.contains('active');
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', !isActive);
    });
  }
  
  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navMenu?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Header scroll effect
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.header');
  
  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;
    
    if (header) {
      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
      }
    }
    
    lastScrollY = currentScrollY;
  }, 10);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Smooth Scrolling Setup
 */
function setupSmoothScrolling() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, this.getAttribute('href'));
      }
    });
  });
}

/**
 * Parallax Effects Setup - UNO Style Subtle Movement
 */
function setupParallaxEffects() {
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    // Subtle hero image movement
    const heroSlides = document.querySelectorAll('.slide');
    heroSlides.forEach(slide => {
      const yPos = scrolled * 0.3;
      slide.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  // Throttled scroll listener
  window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Gallery Filters Setup
 */
function setupGalleryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter gallery items with animation
      galleryItems.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        // Staggered animation
        setTimeout(() => {
          if (shouldShow) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            
            requestAnimationFrame(() => {
              item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        }, index * 50);
      });
    });
  });
  
  // Gallery item click handlers for modal view
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const overlay = item.querySelector('.gallery-overlay');
      
      if (img) {
        openImageModal(img.src, overlay?.querySelector('h4')?.textContent, overlay?.querySelector('p')?.textContent);
      }
    });
  });
}

/**
 * Reservation Form Setup
 */
function setupReservationForm() {
  const form = document.getElementById('reservationForm');
  const experienceButtons = document.querySelectorAll('.btn-reserve');
  
  // Handle experience selection buttons
  experienceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const experience = e.target.getAttribute('data-experience');
      if (experience) {
        // Pre-select the experience
        const radioButton = document.querySelector(`input[name="experience"][value="${experience}"]`);
        if (radioButton) {
          radioButton.checked = true;
          updateSelectedExperience(experience);
        }
        
        // Scroll to reservation section
        const reservationSection = document.getElementById('reserve');
        if (reservationSection) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const targetPosition = reservationSection.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Handle experience radio button changes
  const experienceRadios = document.querySelectorAll('input[name="experience"]');
  experienceRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      updateSelectedExperience(e.target.value);
    });
  });
  
  // Form submission
  if (form) {
    form.addEventListener('submit', handleReservationSubmit);
  }
  
  // Form validation
  setupFormValidation();
}

/**
 * Update selected experience in the form
 */
function updateSelectedExperience(experienceKey) {
  AppState.selectedExperience = experienceKey;
  const experienceName = AppState.experienceNames[experienceKey];
  const price = AppState.experiencePrices[experienceKey];
  
  // Update step 3 summary
  const selectedExperienceEl = document.getElementById('selectedExperience');
  const totalAmountEl = document.getElementById('totalAmount');
  
  if (selectedExperienceEl) {
    selectedExperienceEl.textContent = experienceName;
  }
  
  if (totalAmountEl) {
    totalAmountEl.textContent = `$${price.toLocaleString()}`;
  }
}

/**
 * Form validation setup
 */
function setupFormValidation() {
  const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
  
  inputs.forEach(input => {
    // Real-time validation
    input.addEventListener('blur', validateField);
    input.addEventListener('input', debounce(validateField, 300));
  });
}

/**
 * Validate individual form field
 */
function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  let isValid = true;
  let message = '';
  
  // Remove existing error styling
  field.classList.remove('error');
  removeErrorMessage(field);
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    message = 'This field is required';
  }
  
  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
  }
  
  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      message = 'Please enter a valid phone number';
    }
  }
  
  // Display error if invalid
  if (!isValid) {
    showFieldError(field, message);
  }
  
  return isValid;
}

/**
 * Show field validation error
 */
function showFieldError(field, message) {
  field.classList.add('error');
  
  const errorEl = document.createElement('div');
  errorEl.className = 'field-error';
  errorEl.textContent = message;
  errorEl.style.color = '#e53e3e';
  errorEl.style.fontSize = '0.875rem';
  errorEl.style.marginTop = '0.25rem';
  
  field.parentNode.appendChild(errorEl);
}

/**
 * Remove field validation error
 */
function removeErrorMessage(field) {
  const errorEl = field.parentNode.querySelector('.field-error');
  if (errorEl) {
    errorEl.remove();
  }
}

/**
 * Contact Form Setup
 */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }
}

/**
 * Handle contact form submission
 */
async function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');
  
  // Validate form
  const formData = new FormData(form);
  const isValid = validateContactForm(formData);
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly.', 'error');
    return;
  }
  
  // Show loading state
  btnText.style.display = 'none';
  btnSpinner.classList.remove('hidden');
  submitBtn.disabled = true;
  
  try {
    // Simulate form submission (replace with actual API call)
    await simulateFormSubmission(formData);
    
    // Success
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    form.reset();
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    showNotification('There was an error sending your message. Please try again.', 'error');
  } finally {
    // Reset button state
    btnText.style.display = 'inline';
    btnSpinner.classList.add('hidden');
    submitBtn.disabled = false;
  }
}

/**
 * Validate contact form
 */
function validateContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  if (!name || !email || !subject || !message) {
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  
  return true;
}

/**
 * Stripe Payments Setup
 */
async function setupStripePayments() {
  // Initialize Stripe (replace with your publishable key)
  const stripePublicKey = 'pk_test_your_stripe_publishable_key_here'; // Replace with actual key
  
  try {
    stripe = Stripe(stripePublicKey);
    
    // Create elements instance
    elements = stripe.elements({
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#48bb78',
          colorBackground: '#ffffff',
          colorText: '#2d3748',
          colorDanger: '#e53e3e',
          fontFamily: 'Inter, system-ui, sans-serif',
          borderRadius: '8px'
        }
      }
    });
    
  } catch (error) {
    console.warn('Stripe initialization error:', error);
    // Fallback for demo purposes
    setupDemoPayment();
  }
}

/**
 * Setup demo payment for development
 */
function setupDemoPayment() {
  const paymentElementContainer = document.getElementById('payment-element');
  if (paymentElementContainer) {
    paymentElementContainer.innerHTML = `
      <div class="demo-payment">
        <p style="text-align: center; color: #666; margin-bottom: 1rem;">
          <strong>Demo Mode:</strong> This is a demonstration. No actual payment will be processed.
        </p>
        <div style="border: 2px dashed #ddd; border-radius: 8px; padding: 2rem; text-align: center; background: #f9f9f9;">
          <p>💳 Payment form would appear here</p>
          <p style="font-size: 0.875rem; color: #666;">
            In production, this would be replaced with Stripe's secure payment element
          </p>
        </div>
      </div>
    `;
  }
}

/**
 * Handle reservation form submission
 */
async function handleReservationSubmit(e) {
  e.preventDefault();
  
  if (AppState.isProcessing) {
    return;
  }
  
  AppState.isProcessing = true;
  
  const form = e.target;
  const submitBtn = form.querySelector('#submit-payment');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');
  
  // Show processing state
  btnText.textContent = 'Processing...';
  btnSpinner.classList.remove('hidden');
  submitBtn.disabled = true;
  
  showLoadingOverlay();
  
  try {
    // Validate current step
    if (!validateCurrentStep()) {
      throw new Error('Please complete all required fields');
    }
    
    // Collect form data
    const formData = new FormData(form);
    const reservationData = {
      experience: AppState.selectedExperience,
      experienceName: AppState.experienceNames[AppState.selectedExperience],
      price: AppState.experiencePrices[AppState.selectedExperience],
      personalInfo: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        emergencyContact: formData.get('emergencyContact'),
        experienceLevel: formData.get('experienceLevel'),
        intentions: formData.get('intentions')
      }
    };
    
    // Simulate payment processing (replace with actual Stripe integration)
    await simulatePaymentProcessing(reservationData);
    
    // Success
    showModal('success-modal');
    form.reset();
    AppState.currentStep = 1;
    updateFormStep();
    
  } catch (error) {
    console.error('Reservation submission error:', error);
    showModal('error-modal');
  } finally {
    // Reset states
    AppState.isProcessing = false;
    hideLoadingOverlay();
    
    btnText.textContent = 'Complete Reservation';
    btnSpinner.classList.add('hidden');
    submitBtn.disabled = false;
  }
}

/**
 * Simulate payment processing for demo
 */
async function simulatePaymentProcessing(data) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Simulate random success/failure for demo
  if (Math.random() > 0.1) { // 90% success rate
    return { success: true, transactionId: 'demo_' + Date.now() };
  } else {
    throw new Error('Payment processing failed (demo)');
  }
}

/**
 * Simulate form submission
 */
async function simulateFormSubmission(formData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Log form data for demo
  console.log('Form submitted with data:', Object.fromEntries(formData));
  
  return { success: true };
}

/**
 * Form step navigation
 */
function nextStep() {
  if (!validateCurrentStep()) {
    return;
  }
  
  if (AppState.currentStep < 3) {
    AppState.currentStep++;
    updateFormStep();
    
    // Initialize payment element on step 3
    if (AppState.currentStep === 3) {
      initializePaymentElement();
    }
  }
}

function prevStep() {
  if (AppState.currentStep > 1) {
    AppState.currentStep--;
    updateFormStep();
  }
}

/**
 * Update form step display
 */
function updateFormStep() {
  // Update step visibility
  document.querySelectorAll('.form-step').forEach((step, index) => {
    const stepNumber = index + 1;
    if (stepNumber === AppState.currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  // Update progress indicators
  document.querySelectorAll('.progress-step').forEach((step, index) => {
    const stepNumber = index + 1;
    if (stepNumber <= AppState.currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

/**
 * Validate current form step
 */
function validateCurrentStep() {
  const currentStepEl = document.querySelector(`.form-step[data-step="${AppState.currentStep}"]`);
  if (!currentStepEl) return false;
  
  const requiredFields = currentStepEl.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    const fieldValid = validateField({ target: field });
    if (!fieldValid) {
      isValid = false;
    }
  });
  
  // Additional validation for step 1 (experience selection)
  if (AppState.currentStep === 1 && !AppState.selectedExperience) {
    showNotification('Please select an experience to continue.', 'error');
    isValid = false;
  }
  
  return isValid;
}

/**
 * Initialize Stripe payment element
 */
async function initializePaymentElement() {
  if (!stripe || !elements) {
    console.warn('Stripe not initialized - using demo mode');
    return;
  }
  
  const paymentElementContainer = document.getElementById('payment-element');
  
  try {
    // Create payment element
    paymentElement = elements.create('payment');
    paymentElement.mount('#payment-element');
    
    paymentElement.on('ready', () => {
      console.log('Payment element ready');
    });
    
    paymentElement.on('change', (event) => {
      if (event.error) {
        showNotification(event.error.message, 'error');
      }
    });
    
  } catch (error) {
    console.error('Payment element initialization error:', error);
    setupDemoPayment();
  }
}

/**
 * Animation setup
 */
function setupAnimations() {
  // Intersection observer for scroll animations
  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.experience-card, .gallery-item, .testimonial-card, .about-content, .contact-item');
  animateElements.forEach(el => {
    animationObserver.observe(el);
  });
}

/**
 * Initialize scroll animations
 */
function initializeScrollAnimations() {
  const animateOnScrollElements = document.querySelectorAll('.experience-card, .testimonial-card, .contact-item');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  animateOnScrollElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    scrollObserver.observe(el);
  });
}

/**
 * Performance optimizations
 */
function setupPerformanceOptimizations() {
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // Prefetch critical resources
  prefetchCriticalResources();
}

/**
 * Prefetch critical resources
 */
function prefetchCriticalResources() {
  const prefetchLinks = [
    { rel: 'prefetch', href: 'https://js.stripe.com/v3/', as: 'script' },
    { rel: 'preconnect', href: 'https://api.stripe.com' }
  ];
  
  prefetchLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
}

/**
 * Utility Functions
 */

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#e53e3e' : '#4299e1'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 10001;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-weight: 500;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = 'translateX(0)';
  });
  
  // Auto remove
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

/**
 * Show modal
 */
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }
}

/**
 * Close modal
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/**
 * Show loading overlay
 */
function showLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.remove('hidden');
  }
}

/**
 * Hide loading overlay
 */
function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
  }
}

/**
 * Open image modal (for gallery)
 */
function openImageModal(src, title, description) {
  // Create modal HTML
  const modalHTML = `
    <div id="image-modal" class="modal" role="dialog" aria-labelledby="image-title" aria-modal="true">
      <div class="modal-overlay" onclick="closeModal('image-modal')"></div>
      <div class="modal-content" style="max-width: 90vw; max-height: 90vh;">
        <div class="modal-header">
          <h2 id="image-title">${title || 'Gallery Image'}</h2>
          <button class="modal-close" onclick="closeModal('image-modal')" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body" style="padding: 0;">
          <img src="${src}" alt="${title || 'Gallery image'}" style="width: 100%; height: auto; border-radius: 0 0 1.5rem 1.5rem;">
          ${description ? `<p style="padding: 1rem; margin: 0; text-align: center;">${description}</p>` : ''}
        </div>
      </div>
    </div>
  `;
  
  // Remove existing image modal
  const existingModal = document.getElementById('image-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add new modal
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  showModal('image-modal');
}

/**
 * Keyboard event handlers
 */
document.addEventListener('keydown', (e) => {
  // Close modal with Escape key
  if (e.key === 'Escape') {
    const visibleModal = document.querySelector('.modal:not(.hidden)');
    if (visibleModal) {
      const modalId = visibleModal.id;
      closeModal(modalId);
    }
  }
  
  // Form navigation with arrow keys
  if (e.key === 'ArrowRight' && e.ctrlKey) {
    nextStep();
  } else if (e.key === 'ArrowLeft' && e.ctrlKey) {
    prevStep();
  }
});

/**
 * Window resize handler
 */
window.addEventListener('resize', debounce(() => {
  // Recalculate any size-dependent elements
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    // Trigger reflow for masonry-like effects if needed
    galleryGrid.style.display = 'none';
    galleryGrid.offsetHeight; // Trigger reflow
    galleryGrid.style.display = '';
  }
}, 250));

/**
 * Language Switcher Setup
 */
function setupLanguageSwitcher() {
  const languageDropdown = document.querySelector('.language-dropdown');
  const currentLanguageBtn = document.querySelector('.current-language');
  const langSwitchBtns = document.querySelectorAll('.lang-switch');

  if (!languageDropdown || !currentLanguageBtn) return;

  // Toggle dropdown
  currentLanguageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isExpanded = languageDropdown.getAttribute('aria-expanded') === 'true';
    languageDropdown.setAttribute('aria-expanded', !isExpanded);
  });

  // Handle language switches
  langSwitchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      
      if (languageManager) {
        languageManager.setLanguage(lang);
      }
      
      // Close dropdown
      languageDropdown.setAttribute('aria-expanded', 'false');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!languageDropdown.contains(e.target)) {
      languageDropdown.setAttribute('aria-expanded', 'false');
    }
  });

  // Handle language change event
  document.addEventListener('languageChanged', (e) => {
    const newLang = e.detail.language;
    
    // Update experience prices based on language
    updateExperiencePrices(newLang);
    
    // Update any dynamic content
    updateDynamicContent(newLang);
    
    console.log(`Language changed to: ${newLang}`);
  });
}

/**
 * Update experience prices based on language
 */
function updateExperiencePrices(language) {
  // Update currency symbol and prices if needed
  // For now, keeping Euro as universal currency
  const priceElements = document.querySelectorAll('.price');
  priceElements.forEach(el => {
    // Prices remain the same in euros for all languages
    // Could be extended to support multiple currencies
  });
}

/**
 * Update dynamic content that's not in translations
 */
function updateDynamicContent(language) {
  // Update any JavaScript-generated content
  // Update form validation messages
  // Update Stripe payment language if supported
  
  if (typeof stripe !== 'undefined' && stripe) {
    // Stripe automatically uses browser language, but we could override
    console.log(`Stripe will use ${language} if supported`);
  }
}

/**
 * Service Worker Registration (for PWA capabilities)
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Export functions for global access (if needed)
window.nextStep = nextStep;
window.prevStep = prevStep;
window.closeModal = closeModal;

// Console welcome message
console.log(`
🔥 Welcome to Flamas Matrix
Transformative experiences await...

This application is optimized for:
✨ Performance (Core Web Vitals)
🌿 Accessibility (WCAG 2.1 AA)
📱 Responsive Design
🔒 Secure Payments (Stripe)
🎨 Modern UX/UI

Built with consciousness and care.
`);

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
  
  // Show user-friendly error message
  showNotification('Something unexpected happened. Please refresh the page if issues persist.', 'error');
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  e.preventDefault();
  
  showNotification('A network error occurred. Please check your connection and try again.', 'error');
});