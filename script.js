// Show the signup form and hide the login form
function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

// Show the login form and hide the signup form
function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Display the About Us modal
function showAboutUs() {
    document.getElementById("aboutUsModal").style.display = "flex";
}

// Close the About Us modal
function closeAboutUs() {
    document.getElementById("aboutUsModal").style.display = "none";
}

// Signup function
function signup() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    if (username && password) {
        localStorage.setItem(username, password);
        document.getElementById("signupFeedback").textContent = "Signup successful! Please log in.";
        showLogin();
    } else {
        document.getElementById("signupFeedback").textContent = "Please fill in all fields.";
    }
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById("loginFeedback").textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "game-dashboard.html"; // Redirects to the new page
        }, 1000);
    } else {
        document.getElementById("loginFeedback").textContent = "Invalid username or password.";
    }
}
// Show the Game Story modal
function showGameStory() {
    document.getElementById("gameStoryModal").style.display = "flex";
}

// Close the Game Story modal
function closeGameStory() {
    document.getElementById("gameStoryModal").style.display = "none";
}
