import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WYNA</h3>
            <p>Weave Your New Aura - Premium ethnic wear collection featuring elegant sarees, lehengas, and traditional Indian attire. Since 2025.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">All Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/admin">Admin Portal</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get special offers and updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026-27 <a href="/">WYNA</a>. Weave Your New Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
