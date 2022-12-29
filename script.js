// Add a click event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        // Get the product title and price
        const productTitle = event.target.parentElement.querySelector('h3').textContent;
        const productPrice = event.target.parentElement.querySelector('p').textContent;

        // Add the product to the cart
        addToCart(productTitle, productPrice);
    });
});

// Add a product to the cart
function addToCart(title, price) {
    // Check if the cart is empty
    if (!localStorage.getItem('cart')) {
        // If the cart is empty, create an array with the first product
        const cart = [{ title: title, price: price }];
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        // If the cart is not empty, get the current cart and add the new product
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push({ title: title, price: price });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Update the cart count
function updateCartCount() {
    // Get the cart count element
    const cartCount = document.querySelector('.header-right a:last-child');

    // Check if the cart is empty
    if (!localStorage.getItem('cart')) {
        // If the cart is empty, set the count to 0
        cartCount.textContent = '(0)';
    } else {
        // If the cart is not empty, get the current cart and set the count
        const cart = JSON.parse(localStorage.getItem('cart'));
        cartCount.textContent = `(${cart.length})`;
    }
}

// Initialize the cart count
updateCartCount();
