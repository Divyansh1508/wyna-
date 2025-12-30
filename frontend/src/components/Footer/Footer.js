import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HAMP8</h3>
            <p>Your premier destination for thoughtful, premium, and branded gifting solutions. Gifts, Endless. Always.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">All Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>Corporate Office: B-107, Tower T3, NX One, Noida Extension, UP-201306</p>
              <p>Phone: <a href="tel:+911169266281">+91 11 6926 6281</a></p>
              <p>Email: <a href="mailto:hello@hamp8.com">hello@hamp8.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Hamp8. All rights reserved. | Powered by Bit By Bit Web Services Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
