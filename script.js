function checkForSavedDetails() {
    if(localStorage.getItem("username") && localStorage.getItem("password")) {
        const existingUserBtn = document.createElement("button");
        existingUserBtn.textContent = "Login as existing user";
        existingUserBtn.id = "existing";
        document.body.appendChild(existingUserBtn);

        existingUserBtn.addEventListener('click', ()=>{
            const username = localStorage.getItem("username");
            alert("Logged in as "+ username);
        });
    }
}

// Event listener for the submit button
submitBtn.addEventListener('click', ()=>{
    const username = usernameField.value;
    const password = passwordField.value;
    if(checkbox.checked){
        localStorage.setItem("username", username)
        localStorage.setItem("password", password);
    } else if(!checkbox.checked){
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        alert("Logged in as.")
    }

    // Call the function to check for saved details
    checkForSavedDetails();
})

// Call the function when the page loads
checkForSavedDetails();