const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  herotitle: { type: String, required: false },
  heroimg: { type: String, required: false },
  abouttitle: { type: String, required: false },
  aboutdesc: { type: String, required: false },
  aboutimg: { type: String, required: false },
  workprocestitle: { type: String, required: false },
  workprocessone: { type: String, required: false },
  workprocesstwo: { type: String, required: false },
  workprocessthree: { type: String, required: false },
  workprocessfour: { type: String, required: false },
  beatstitle: { type: String, required: false },
});

module.exports = mongoose.model("Content", ContentSchema);
