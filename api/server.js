const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const contentRoute = require("./routes/content");
const stripeRoute = require("./routes/stripe");

// const path = require('path');
//ndjsvnjsavdmjkasdvn1e3eu127

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contents", contentRoute);
app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
  res.send("Server is running..");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running..");
});
