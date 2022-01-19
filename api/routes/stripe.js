const router = require("express").Router();
const KEY = process.env.STRIPE_PRIVATE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  const { amount, tokenId, currency } = req.body;

  const payableAmount = parseInt(amount) * 100;

  try {
    const session = await stripe.paymentIntents.create(
      {
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "http://localhost:3000/confirm",
        cancel_url: "http://localhost:3000/error",
        tokenId: tokenId,
        amount: payableAmount,
        currency: currency,
      },
      res.json({ url: session.url })
      // (stripeErr, stripeRes) => {
      //   if (stripeErr) {
      //     console.log("Token ID in API: ", tokenId);
      //     res.status(500).json(stripeErr);
      //   } else {
      //     res.status(200).json(stripeRes);
      //   }
      // }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
