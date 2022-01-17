const router = require("express").Router();
const stripe = require("stripe")(
  "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j"
);

stripe.post("/payment", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");

  KEY.charges.create(
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
