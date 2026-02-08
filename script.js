document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email and password match the admin credentials
    if (email === 'harshalpatil123@gmail.com' && password === '123456789') {
        // Redirect to admin page
        window.location.href = 'admin.html';
    } else {
        // For other users, you can add logic here, e.g., redirect to a user page or show an error
        alert('Invalid email or password');
    }
});
