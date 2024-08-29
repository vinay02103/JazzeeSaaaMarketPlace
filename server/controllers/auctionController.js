const Auction = require("../models/Auction");
const Product = require("../models/Product");

exports.createAuction = async (req, res) => {
  const { selectedProducts, budget } = req.body;

  try {
    const auctions = [];

    for (let product of selectedProducts) {
      const auctionResult = {
        productId: product._id,
        vendor: product.vendor,
        initialPrice: product.price,
        finalPrice: Math.max(product.price - Math.random() * 50, 0), // Simulated price drop
      };

      auctions.push(auctionResult);
    }

    res.json(auctions);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
