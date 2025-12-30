import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.jpeg" alt="WYNA" className="logo-img" />
            <span className="logo-text">WYNA</span>
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link
              to="/admin"
              className="admin-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <Link
              to="/cart"
              className="cart-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="cart-icon">🛒</span> Cart
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
