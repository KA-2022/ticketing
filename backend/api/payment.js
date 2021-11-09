console.log(process.env.STRIPE_SECRET_KEY);

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Router } = require('express');
const router = Router();

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card'
    ],
    mode: 'payment',
    success_url: `${process.env.FRONTEND_URL}/success.html`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel.html`,
  });

  res.json({ id: session.id });
});

module.exports = router;