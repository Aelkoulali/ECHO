const paymentMethods = document.querySelectorAll(
      'input[name="payment-method"]'
    );

    const cardFields = document.getElementById("card-fields");

    paymentMethods.forEach(method => {
      method.addEventListener("change", () => {
        cardFields.style.display =
          method.value === "card" && method.checked ? "block" : "none";
      });
    });

    document.getElementById("checkout-form").addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Order submitted successfully!");

      // Replace this with your backend/payment-provider request:
      // window.location.href = "success.html";
    });
