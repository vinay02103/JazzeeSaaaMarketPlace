import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AuctionForm from "./components/AuctionForm";
import AuctionResult from "./components/AuctionResult";
import "./styles/App.css"; // Updated path

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [auctionResult, setAuctionResult] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleAuctionComplete = (result) => {
    setAuctionResult(result);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>SaaS Marketplace</h1>
        <ProductList onProductSelect={handleProductSelect} />
        {selectedProducts.length > 0 && (
          <AuctionForm
            selectedProducts={selectedProducts}
            onAuctionComplete={handleAuctionComplete}
          />
        )}
        {auctionResult && <AuctionResult result={auctionResult} />}
      </div>
    </div>
  );
}

export default App;
