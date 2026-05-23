import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch, cart }) {

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <img src="/images/logo.jpg" alt="logo" />
          <h2>ShopEasy</h2>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <button
          className="cart-btn"
          onClick={() => setShowCart(!showCart)}
        >
          Cart ({cart?.length || 0})
        </button>

      </nav>

      {showCart && (
        <div className="cart-container">

          <h2>Cart Items</h2>

          {cart.length === 0 ? (

            <p>Your cart is empty</p>

          ) : (

            cart.map((item, index) => (

              <div key={index} className="cart-item">

                <img
                  src={item.image}
                  alt={item.name}
                  width="80"
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>

              </div>

            ))

          )}

        </div>
      )}
    </>
  );
}

export default Navbar;