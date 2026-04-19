/* ============================================
   CONTACT.JS — Form validation & submission
   ============================================ */

'use strict';

(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  const fields = {
    name:    { el: document.getElementById('name'),    error: document.getElementById('nameError') },
    email:   { el: document.getElementById('email'),   error: document.getElementById('emailError') },
    message: { el: document.getElementById('message'), error: document.getElementById('messageError') },
  };

  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validateField(key) {
    const { el, error } = fields[key];
    const val = el.value.trim();
    let msg = '';

    if (!val) {
      msg = 'This field is required.';
    } else if (key === 'email' && !validateEmail(val)) {
      msg = 'Please enter a valid email address.';
    } else if (key === 'message' && val.length < 20) {
      msg = 'Please write at least 20 characters.';
    }

    el.classList.toggle('error', !!msg);
    error.textContent = msg;
    return !msg;
  }

  // Live validation on blur
  Object.keys(fields).forEach(key => {
    const { el } = fields[key];
    el.addEventListener('blur', () => validateField(key));
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) validateField(key);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valid = Object.keys(fields).map(validateField).every(Boolean);
    if (!valid) return;

    // Show loading state
    const btnText    = submitBtn.querySelector('.btn__text');
    const btnLoading = submitBtn.querySelector('.btn__loading');
    submitBtn.disabled = true;
    btnText.hidden    = true;
    btnLoading.hidden = false;

    // Simulate async send (replace with Formspree / EmailJS in production)
    setTimeout(() => {
      form.style.opacity = '0';
      form.style.pointerEvents = 'none';
      setTimeout(() => {
        success.hidden = false;
        success.style.opacity = '0';
        requestAnimationFrame(() => {
          success.style.transition = 'opacity 0.4s ease';
          success.style.opacity = '1';
        });
      }, 300);
    }, 1600);
  });
})();
