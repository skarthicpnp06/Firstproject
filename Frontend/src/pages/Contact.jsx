import React from "react";

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you! Whether you have a question about products,
        pricing, or support — our team is ready to help.
      </p>

      <h2>📧 Email Support</h2>
      <p>support@shopeasy.com</p>

      <h2>📱 Phone Support</h2>
      <p>+91 98765 43210</p>

      <h2>🏢 Office Address</h2>
      <p>
        ShopEasy Pvt Ltd<br />
        Coimbatore, Tamil Nadu, India
      </p>

      <h2>🕒 Working Hours</h2>
      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>

      <h2>💬 Send a Message</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;