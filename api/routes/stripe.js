const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "nok",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).jaon(stripeErr);
      } else {
        res.status(200).jaon(stripeRes);
      }
    }
  );
});

module.exports = router;
