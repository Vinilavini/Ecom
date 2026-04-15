import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Brand */}
      <div className="footer-section">
        <h2>Fashion Store</h2>
        <p>Shop the latest trends in Men, Women & Kids fashion.</p>
      </div>

      {/* Links */}
      <div className="footer-section">
        <h3>Quick Links</h3>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>
        <NavLink to="/cart">Cart</NavLink>

      </div>

      {/* Contact */}
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: support@fashionstore.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Mon - Sat: 9AM - 6PM</p>
      </div>

      {/* Policies */}
      <div className="footer-section">
        <h3>Policies</h3>
        <p>Shipping Policy</p>
        <p>Return Policy</p>
        <p>Privacy Policy</p>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Fashion Store | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;