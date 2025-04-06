
// Select elements
const cartButton = document.getElementById('cart-button');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartButton = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');

// Cart array
let cart = [];

// Add event listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productElement = event.target.closest('.product');
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    addToCart(name, price);
  });
});

cartButton.addEventListener('click', () => {
  cartOverlay.style.display = 'flex';
});

closeCartButton.addEventListener('click', () => {
  cartOverlay.style.display = 'none';
});

function addToCart(name, price) {
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCartUI();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x ${item.quantity}</span>
        <span>$${itemTotal.toFixed(2)}</span>
        <button class="remove-from-cart" data-name="${item.name}">Eliminar</button>
      </div>
    `;
  });

  cartTotalElement.textContent = total.toFixed(2);
  cartCountElement.textContent = cart.length;

  // Add event listeners for remove buttons
  document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const name = event.target.getAttribute('data-name');
      removeFromCart(name);
    });
  });
}

// Initialize cart UI on page load
updateCartUI();
