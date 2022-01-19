const router = require("express").Router();

router.post("/payment", async (req, res) => {
  const { amount, tokenId, currency } = req.body;

  const payableAmount = parseInt(amount) * 100;

  try {
    const client = new VippsClient({
      id: "7e26d780-edfe-4320-b026-f02e6c31840b",
      secret: "gXJpRvykra8n7f0dKPd4GQ9tmt8=",
      subscriptionId: "7a3b2b58457641d191fd9802408e5234",
      testDrive: true,
    });

    client.initiatePayment({ order: req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
