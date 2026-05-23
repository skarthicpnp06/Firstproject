import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

function Home() {
  return (
    <div>
      <Header />

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Welcome to ShopEasy Home Page
      </h2>

      <Form />
    </div>
  );
}

export default Home;