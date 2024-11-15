//your JS code here. If required.
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#submit");


submitBtn.addEventListener('click', ()=>{
	
const username = usernameField.value;
const password = passwordField.value;
	if(checkbox.checked){
		localStorage.setItem("username", username)
		localStorage.setItem("password", password);
	} else if(!checkbox.checked){
		localStorage.removeItem("username")
		localStorage.removeItem("password")
		alert("Logged in as "+ username)
	}
})

if(localStorage.getItem("username")&& localStorage.getItem("password")){
	const existingUserBtn = document.createElement("button");
	existingUserBtn.textContent = "Login as existing user";
	existingUserBtn.id="existing";
	document.body.appendChild(existingUserBtn);

	existingUserBtn.addEventListener('click', ()=>{
		const username = localStorage.getItem("username");
		alert("Logged in as "+ username);
	})
}