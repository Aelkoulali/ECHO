// Declare variables
const cartItems = document.querySelectorAll(".cart-item");

const itemCountElement = document.getElementById("item-count");
const headerCountElement = document.getElementById("cart-header-count");
const subtotalElement = document.getElementById("subtotal");
const grandTotalElement = document.getElementById("grand-total");
const shippingOption = document.getElementById("shipping-option");

// Format currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Update cart totals
function updateCart() {
  let totalQuantity = 0;
  let subtotal = 0;

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

  // Get selected shipping cost
  let shippingCost = Number(shippingOption.value);

  // Free shipping when subtotal is at least $150
  if (subtotal >= 150 && shippingOption.value === "0") {
    shippingCost = 0;
  }

  const grandTotal = subtotal + shippingCost;
  const itemText = `${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`;

  itemCountElement.textContent = itemText;
  headerCountElement.textContent = itemText;
  subtotalElement.textContent = formatCurrency(subtotal);
  grandTotalElement.textContent = formatCurrency(grandTotal);
}

// Set up controls for each cart item
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

// Update total when shipping changes
shippingOption.addEventListener("change", updateCart);

// Initial calculation
updateCart();
