import React from "react";

function AuctionResult({ result }) {
  return (
    <div className="auction-result">
      <h3>Auction Results</h3>
      <ul>
        {result.map((product, index) => (
          <li key={index}>
            {product.name} - Final Price: ${product.finalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionResult;
