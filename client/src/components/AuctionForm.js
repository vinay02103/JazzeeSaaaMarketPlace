import React, { useState } from "react";
import axios from "axios";

const AuctionForm = ({ selectedProducts }) => {
  const [budget, setBudget] = useState("");
  const [auctionResults, setAuctionResults] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/auction", {
        selectedProducts,
        budget,
      });
      // Ensure the response data is an array
      if (Array.isArray(response.data)) {
        setAuctionResults(response.data);
      } else {
        setError("Invalid auction results received.");
      }
    } catch (err) {
      console.error("Error conducting auction:", err);
      setError("Error conducting auction.");
    }
  };

  return (
    <div className="auction-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter your budget"
          required
        />
        <button type="submit">Start Auction</button>
      </form>

      {error && <p>{error}</p>}

      {auctionResults.length > 0 && (
        <div className="auction-result">
          <h3>Auction Results:</h3>
          <ul>
            {auctionResults.map((result, index) => (
              <li key={index}>
                Vendor: {result.vendor} - Price: ${result.finalPrice}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuctionForm;
