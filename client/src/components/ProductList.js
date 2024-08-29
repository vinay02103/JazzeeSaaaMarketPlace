import React from "react";

function ProductList({ onProductSelect }) {
  const products = [
    {
      name: "GitHub",
      category: "Code Collaboration",
      price: 500,
      vendor: "GitHub",
    },
    {
      name: "GitLab",
      category: "Code Collaboration",
      price: 450,
      vendor: "GitLab",
    },
    {
      name: "Bitbucket",
      category: "Code Collaboration",
      price: 400,
      vendor: "Atlassian",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      <h3>Available Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => onProductSelect(product)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
