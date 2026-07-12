const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/3cIdR84aG7Nse9u7wZfYY0g";

const checkoutForm = document.querySelector("#checkout-form");
const statusMessage = document.querySelector("#checkout-status");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!checkoutForm.reportValidity()) {
      return;
    }

    const formData = new FormData(checkoutForm);
    const checkoutUrl = new URL(STRIPE_CHECKOUT_URL);

    checkoutUrl.searchParams.set("prefilled_email", formData.get("email"));
    checkoutUrl.searchParams.set("client_reference_id", "software-engineering-career-coaching-3000");
    window.location.assign(checkoutUrl.toString());
  });
}
