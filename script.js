if (document.getElementById('loginForm')) {
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
}

// Search functionality for shop.html
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryItems = document.querySelectorAll('.category-item');

if (searchInput && searchButton && categoryItems.length > 0) {
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        categoryItems.forEach(item => {
            const itemName = item.querySelector('span').textContent.toLowerCase().trim();
            if (itemName.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    searchInput.addEventListener('input', performSearch);
}
