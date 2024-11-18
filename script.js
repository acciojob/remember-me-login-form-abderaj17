const submitButton = document.getElementById("submit");
        const checkbox = document.getElementById("checkbox");
        const existingButton = document.getElementById("existing");
 
        // Check for saved data in localStorage
        const savedData = localStorage.getItem("usersData");
        if (savedData) {
            existingButton.style.display = "block"; // Show the "Login as existing user" button
        }
 
        // Add event listener for the Submit button
        submitButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent form submission
 
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
 
            // Ensure both fields are filled
            if (!username || !password) {
                alert("Please enter both username and password.");
                return;
            }
 
            // Save or clear localStorage based on checkbox state
            if (checkbox.checked) {
                const userObj = { username, password };
                localStorage.setItem("usersData", JSON.stringify(userObj));
                alert(`Logged in as ${username}`);
                existingButton.style.display = "block"; // Show the "Login as existing user" button
            } else {
                localStorage.removeItem("usersData");
                alert(`Logged in as ${username}`);
            }
        });
 
        // Add event listener for the Existing User button
        existingButton.addEventListener("click", () => {
            const parsedData = JSON.parse(localStorage.getItem("usersData"));
            if (parsedData) {
                alert(`Logged in as ${parsedData.username}`);
            } else {
                alert("No user data found.");
            }
        });