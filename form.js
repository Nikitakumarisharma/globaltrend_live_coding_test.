document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-up-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    form.addEventListener('input', () => {
        validateName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
            alert('Form submitted successfully!');
        }
    });

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            return false;
        } else {
            nameError.classList.add('hidden');
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            return false;
        } else {
            emailError.classList.add('hidden');
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.trim() === '') {
            passwordError.classList.remove('hidden');
            return false;
        } else {
            passwordError.classList.add('hidden');
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
            confirmPasswordError.classList.remove('hidden');
            return false;
        } else {
            confirmPasswordError.classList.add('hidden');
            return true;
        }
    }
});
