// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get username and password (for demonstration purposes only)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a successful login
    localStorage.setItem('userToken', 'fake-token-123'); // Store a fake token
    localStorage.setItem('username', username); // Store the username

    alert('Logged in successfully!');
    window.location.href = 'my-books.html'; // Redirect to the my-books page
});

// Google login functionality
function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Store Google user info in localStorage
    localStorage.setItem('userToken', googleUser.getAuthResponse().id_token); // Store Google ID token
    localStorage.setItem('username', profile.getName()); // Store Google username
    localStorage.setItem('email', profile.getEmail()); // Store Google email

    alert('Logged in with Google successfully!');
    window.location.href = 'my-books.html'; // Redirect to the my-books page
}

// Logout functionality
function logout() {
    // Clear stored data
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

    // Redirect to the login page
    window.location.href = 'login.html';
}

// Add logout event listener (if logout link exists)
const logoutLink = document.getElementById('logoutLink');
if (logoutLink) {
    logoutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        logout(); // Call the logout function
    });
}

// Check login state on page load
window.onload = () => {
    const token = localStorage.getItem('userToken');
    const logoutLinkContainer = document.getElementById('logoutLinkContainer');
    const loginLinkContainer = document.getElementById('loginLinkContainer');

    if (token) {
        // User is logged in
        if (logoutLinkContainer) logoutLinkContainer.style.display = 'block';
        if (loginLinkContainer) loginLinkContainer.style.display = 'none';
    } else {
        // User is not logged in
        if (logoutLinkContainer) logoutLinkContainer.style.display = 'none';
        if (loginLinkContainer) loginLinkContainer.style.display = 'block';
    }
};