// Declare variables
const cartItems = document.querySelectorAll(".cart-item");
const itemCountElement = document.getElementById("item-count");
const subtotalElement = document.getElementById("subtotal");
const grandTotalElement = document.getElementById("grand-total");

// Function Format Currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Function to update the item count and totals
function updateCart() {
  let totalQuantity = 0;
  let subtotal = 0;

  // Loop through each cart item to calculate total quantity and subtotal
  cartItems.forEach((cartItem) => {
    const price = Number(cartItem.dataset.price);
    const quantityInput = cartItem.querySelector(".quantity-input");
    const itemTotalElement = cartItem.querySelector(".item-total");

    let quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      quantityInput.value = 1;
    }

    const itemTotal = price * quantity;

    totalQuantity += quantity;
    subtotal += itemTotal;

    itemTotalElement.textContent = formatCurrency(itemTotal);
  });

  itemCountElement.textContent = `${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`;

  subtotalElement.textContent = formatCurrency(subtotal);
  grandTotalElement.textContent = formatCurrency(subtotal);
}

cartItems.forEach((cartItem) => {
  const decreaseButton = cartItem.querySelector(".decrease-quantity");
  const increaseButton = cartItem.querySelector(".increase-quantity");
  const quantityInput = cartItem.querySelector(".quantity-input");

  increaseButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value, 10) || 1;
    quantityInput.value = quantity + 1;
    updateCart();
  });

  decreaseButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value, 10) || 1;

    if (quantity > 1) {
      quantityInput.value = quantity - 1;
      updateCart();
    }
  });

  quantityInput.addEventListener("input", updateCart);
  quantityInput.addEventListener("change", updateCart);
});

updateCart();
