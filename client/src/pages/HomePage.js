import React, { useState } from "react";
import ProductList from "../components/ProductList";
import AuctionForm from "../components/AuctionForm";

const HomePage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  return (
    <div>
      <h1>SaaS Marketplace</h1>
      <ProductList onSelect={handleProductSelect} />
      {selectedProducts.length > 0 && (
        <AuctionForm selectedProducts={selectedProducts} />
      )}
    </div>
  );
};

export default HomePage;
