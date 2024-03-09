// signup.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const messageBox = document.getElementById('message-box');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const username = form.querySelector('#username').value.trim();
        const password = form.querySelector('#password').value.trim();
        const confirmPassword = form.querySelector('#confirm-password').value.trim();
        const email = form.querySelector('#email').value.trim();

        // Validation checks
        let errorMessages = [];

        const usernameValid = isValidUsername(username);
        const passwordValid = isValidPassword(password);
        const confirmPasswordValid = password === confirmPassword;
        const emailValid = isValidEmail(email);

        if (!usernameValid) {
            errorMessages.push('Please check the username.');
        }
        if (!passwordValid) {
            errorMessages.push('Please check the password.');
        }
        if (!confirmPasswordValid) {
            errorMessages.push('Passwords do not match.');
        }
        if (!emailValid) {
            errorMessages.push('Please check the email address.');
        }

        // Display message
        if (errorMessages.length > 0) {
            showMessage(errorMessages, 'error');
        } else {
            showMessage('Signup successful!', 'success');
            // Here you would typically submit the form to the server
            // using AJAX or redirect to another page
        }
    });

    function isValidUsername(username) {
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        return usernameRegex.test(username);
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        const messageParagraph = messageBox.querySelector('p');

        // Clear previous messages
        messageParagraph.innerHTML = '';

        if (typeof message === 'string') {
            messageParagraph.textContent = message;
        } else {
            // Add each error message as a separate paragraph
            message.forEach(msg => {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = msg;
                messageParagraph.appendChild(errorMessage);
            });
        }

        messageBox.style.display = 'block';
        messageBox.className = type; // Add a class for styling purposes
    }
});

