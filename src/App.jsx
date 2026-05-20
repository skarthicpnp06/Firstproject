import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

import pro1 from "./components/images/pro1.jpg";
import pro2 from "./components/images/pro2.jpg";
import pro33 from "./components/images/pro33.jpg";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: pro1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image: pro2,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$59",
      image: pro33,
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar
        cart={cart}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              search={search}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* LOGIN & REGISTER */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;