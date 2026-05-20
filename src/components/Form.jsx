import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully!");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Customer Inquiry Form</h2>

      <form onSubmit={handleSubmit} className="custom-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;