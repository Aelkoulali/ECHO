// Declare variables
const cartItems = document.querySelector('.cart-item');
const itemCountElement = document.getElementById('item-count');
const subtotalElement = document.getElementById('subtotal');
const grandTotalElement = document.getElementById('grand-total');

// Function Format Currency 
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Function to update the item count and totals
function updateCart() {
    let totalQuantity =0;
    let subtotal = 0;
    
    cartItems.forEach((cartItem) => {
      const productId = Number(cartItem.dataset.productId);

      const product = products.find((item) => item.id === productId);

      if (!product) return;

      const quantityInput = cartItem.querySelector(".quantity-input");
      const itemTotalElement = cartItem.querySelector(".item-total");

      let quantity = parseInt(quantityInput.value, 10);

      if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        quantityInput.value = 1;
      }

      const itemTotal = product.price * quantity;

      totalQuantity += quantity;
      subtotal += itemTotal;

      itemTotalElement.textContent = formatCurrency(itemTotal);
    });

    itemCountElement.textContent =
      `${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`;

    subtotalElement.textContent = formatCurrency(subtotal);
    grandTotalElement.textContent = formatCurrency(subtotal);
  }

  cartItems.forEach((cartItem) => {
    const decreaseButton = cartItem.querySelector(".decrease-quantity");
    const increaseButton = cartItem.querySelector(".increase-quantity");
    const quantityInput = cartItem.querySelector(".quantity-input");

    increaseButton.addEventListener("click", () => {
      quantityInput.value = parseInt(quantityInput.value, 10) + 1;
      updateCart();
    });

    decreaseButton.addEventListener("click", () => {
      const currentQuantity = parseInt(quantityInput.value, 10);

      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        updateCart();
      }
    });

    quantityInput.addEventListener("input", updateCart);
    quantityInput.addEventListener("change", updateCart);
  });

  updateCart(); 

