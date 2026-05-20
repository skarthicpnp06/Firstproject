import React from "react";
import ProductCard from "../components/ProductCard";

function Products({ products, search, addToCart }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default Products;