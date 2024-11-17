// Select relevant DOM elements
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#login-form");

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    if (!username) {
        alert("Please enter a username.");
        return;
    }

    if (!password) {
        alert("Please enter a password.");
        return;
    }

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    alert("Logged in as " + username);
    renderExistingUserButton();
});

// Render "Login as existing user" button if details exist in localStorage
function renderExistingUserButton() {
    const existingButton = document.querySelector("#existing");
    if (existingButton) {
        existingButton.remove(); // Remove existing button if it exists
    }

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        const existingUserBtn = document.createElement("button");
        existingUserBtn.textContent = "Login as existing user";
        existingUserBtn.id = "existing";
        document.body.appendChild(existingUserBtn);

        existingUserBtn.addEventListener("click", () => {
            const username = localStorage.getItem("username");
            alert("Logged in as " + username);
        });
    }
}

// Initial rendering of "Login as existing user" button
renderExistingUserButton();
