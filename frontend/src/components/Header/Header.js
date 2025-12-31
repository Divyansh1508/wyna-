import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/Asset/logo.jpeg" className="logo-img" />
            <span className="logo-text">WYNA</span>
          </Link>
          
          {/* Search Bar */}
          <div className={`search-container ${searchOpen ? 'search-open' : ''}`}>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for exquisite sarees..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <button
            className="search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <i className="fas fa-search"></i>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <div 
              className="nav-item products-dropdown"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                Products <i className="fas fa-chevron-down"></i>
              </Link>
              
              {/* Mega Menu */}
              {megaMenuOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-section">
                      <h3>Series Collections</h3>
                      <ul>
                        <li><Link to="/series/banarasi">Series 01 - Banarasi</Link></li>
                        <li><Link to="/series/bridal">Bridal Aura</Link></li>
                        <li><Link to="/series/heritage">Heritage Collection</Link></li>
                      </ul>
                    </div>
                    <div className="mega-menu-section">
                      <h3>By Occasion</h3>
                      <ul>
                        <li><Link to="/occasion/wedding">Wedding</Link></li>
                        <li><Link to="/occasion/festive">Festive</Link></li>
                        <li><Link to="/occasion/casual">Casual Elegance</Link></li>
                      </ul>
                    </div>
                    <div className="mega-menu-section">
                      <h3>By Fabric</h3>
                      <ul>
                        <li><Link to="/fabric/silk">Pure Silk</Link></li>
                        <li><Link to="/fabric/banarasi">Banarasi Silk</Link></li>
                        <li><Link to="/fabric/blended">Blended Fabrics</Link></li>
                      </ul>
                    </div>
                    <div className="mega-menu-featured">
                      <h3>Featured</h3>
                      <div className="featured-product">
                        <img src="/images/featured-saree.jpg" alt="Featured Saree" />
                        <h4>Exquisite Banarasi Masterpiece</h4>
                        <p>Limited Edition • Handcrafted</p>
                        <Link to="/products/featured" className="btn btn-outline">View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            {/* <Link
              to="/admin"
              className="admin-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link> */}
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
