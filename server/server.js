const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const productRoutes = require("./routes/productRoutes");
const auctionRoutes = require("./routes/auctionRoutes");

app.use("/api/products", productRoutes);
app.use("/api/auction", auctionRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
