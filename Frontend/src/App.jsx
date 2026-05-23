import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/products")

      .then((response) => response.json())

      .then((data) => {

        console.log(data);

        setProducts(data);

      })

      .catch((error) => {

        console.log("Fetch Error:", error);

      });

  }, []);

  return (

    <Router>

      <Navbar
        search={search}
        setSearch={setSearch}
        cart={cart}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              search={search}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </Router>
  );
}

export default App;