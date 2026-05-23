import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const message = await response.text();

      alert(message);

      if (message === "Registration Successful") {

        navigate("/login");

      }

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Register</h2>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="auth-text">

          Already have an account?{" "}

          <Link to="/login">
            Login Here
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;