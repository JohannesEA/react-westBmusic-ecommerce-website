const Content = require("../models/content");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//Create content
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.body);

  const newContent = new Content(req.body);

  try {
    const savedContent = await newContent.save();
    res.status(200).json(savedContent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update content
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get product by id
router.get("/find/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all products
router.get("/", async (req, res) => {
  try {
    let content = await Content.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
