// login.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const messageBox = document.getElementById("message-box");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const users = await response.json();
            const user = users.find(user => user.name === username && user.email === password);

            if (user) {
                showMessage("Login successful", "success");
            } else {
                showMessage("Invalid username or password", "error");
            }
        } catch (error) {
            showMessage("Failed to fetch user data", "error");
        }
    });

    function showMessage(message, messageType) {
        const messageParagraph = messageBox.querySelector("p");
        messageParagraph.textContent = message;
        messageBox.className = messageType;
        messageBox.style.display = "block"; // Show the message box
    }
});
