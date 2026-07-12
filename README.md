# Software Engineering Career Coaching Site

A static multi-page website for a software engineering career coaching offer.

## Pages

- `index.html`: Home page with hero, audience, services, results, and CTA
- `about.html`: Story, coaching mission, and experience overview
- `program.html`: Sales page with inclusions and fit criteria
- `pricing.html`: Simple $3,000 pricing page
- `checkout.html`: Simple application/checkout form that redirects to Stripe Checkout

## Stripe Checkout

The checkout form redirects to the live Stripe payment link in `src/app.js`:

```js
const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/3cIdR84aG7Nse9u7wZfYY0g";
```

The checkout form pre-fills the email and passes a coaching-program reference to Stripe.

## Running Locally

Serve the project with a local web server:

```bash
python3 -m http.server 4180
```

Then open:

```text
http://127.0.0.1:4180/index.html
```
