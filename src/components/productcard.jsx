import React from "react";

function ProductCard({ name, price, image, addToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>

        <p>{price}</p>

        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;