import React from "react";
import ProductCard from "../components/ProductCard";

function Products({ products, search, cart, setCart }) {

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (

    <div className="products-container">

      {filteredProducts.map((p) => (

        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
          addToCart={() => addToCart(p)}
        />

      ))}

    </div>
  );
}

export default Products;