const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  vendor: { type: String, required: true },
  initialPrice: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Auction", AuctionSchema);
