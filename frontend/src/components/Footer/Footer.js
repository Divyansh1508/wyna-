import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer section-separator-diagonal">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="brand-section">
              <h3 className="brand-title">WYNA</h3>
              <p className="brand-tagline">Weave Your New Aura</p>
              <p className="brand-description">
                Premium ethnic wear collection featuring elegant sarees, lehengas, 
                and traditional Indian attire. Each piece is a masterpiece of 
                craftsmanship and heritage.
              </p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/wyna" target="_blank" rel="noopener noreferrer" className="social-link hover-scale" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/wyna" target="_blank" rel="noopener noreferrer" className="social-link hover-scale" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/wyna" target="_blank" rel="noopener noreferrer" className="social-link hover-scale" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://pinterest.com/wyna" target="_blank" rel="noopener noreferrer" className="social-link hover-scale" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="https://youtube.com/wyna" target="_blank" rel="noopener noreferrer" className="social-link hover-scale" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link hover-lift">Home</a>
              </li>
              <li>
                <a href="/products" className="footer-link hover-lift">All Products</a>
              </li>
              <li>
                <a href="/about" className="footer-link hover-lift">About Us</a>
              </li>
              <li>
                <a href="/contact" className="footer-link hover-lift">Contact Us</a>
              </li>
              <li>
                <a href="/admin" className="footer-link hover-lift">Admin Portal</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Collections</h3>
            <ul className="footer-links">
              <li>
                <a href="/categories/banarasi" className="footer-link hover-lift">Banarasi Series</a>
              </li>
              <li>
                <a href="/categories/heritage" className="footer-link hover-lift">Heritage Collection</a>
              </li>
              <li>
                <a href="/categories/bridal" className="footer-link hover-lift">Bridal Aura</a>
              </li>
              <li>
                <a href="/categories/limited" className="footer-link hover-lift">Limited Edition</a>
              </li>
              <li>
                <a href="/categories/custom" className="footer-link hover-lift">Custom Designs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Stay Connected</h3>
            <p className="newsletter-text">
              Subscribe to receive exclusive offers, new collection updates, 
              and styling inspiration from WYNA.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary hover-scale">
                <i className="fas fa-paper-plane"></i>
                Subscribe
              </button>
            </form>
            <div className="contact-info">
              <p className="contact-item">
                <i className="fas fa-envelope"></i>
                info@wyna.com
              </p>
              <p className="contact-item">
                <i className="fas fa-phone"></i>
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <strong>WYNA</strong>. Weave Your New Aura. 
              All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
              <a href="/shipping" className="footer-link">Shipping Policy</a>
              <a href="/refund" className="footer-link">Refund Policy</a>
            </div>
          </div>
          <div className="footer-branding">
            <p className="built-with">
              Built with <span className="heart">❤️</span> for the modern woman
            </p>
            <p className="under-shrinaya">
              Under Shrinaya Parampara (Since 2025)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
