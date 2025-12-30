import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Designer Banarasi Saree",
      price: "₹12,999",
      image: "/images/saree-1.jpg",
      description: "Exquisite pure silk Banarasi saree with golden zari work",
    },
    {
      id: 2,
      name: "Royal Lehenga Choli",
      price: "₹24,999",
      image: "/images/lehenga-1.jpg",
      description:
        "Stunning bridal lehenga with intricate embroidery and golden accents",
    },
    {
      id: 3,
      name: "Elegant Anarkali Suit",
      price: "₹8,999",
      image: "/images/anarkali-1.jpg",
      description: "Graceful anarkali suit with traditional embellishments",
    },
  ];

  const categories = [
    { name: "Sarees", count: 150, image: "/images/category-sarees.jpg" },
    { name: "Lehengas", count: 85, image: "/images/category-lehengas.jpg" },
    { name: "Suits & Salwar", count: 120, image: "/images/category-suits.jpg" },
    {
      name: "Bridal Collection",
      count: 65,
      image: "/images/category-bridal.jpg",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero animate-fade-in-up">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Weave Your New
              <span className="highlight"> Aura</span>
            </h1>
            <p className="hero-subtitle">
              Discover the finest collection of premium ethnic wear. From
              traditional sarees to contemporary lehengas, celebrate your
              heritage with elegance and grace.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-gold">
                <i className="fas fa-shopping-bag"></i>
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline">
                <i className="fas fa-info-circle"></i>
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/logo.jpeg" alt="WYNA - Premium Ethnic Wear" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Discover our curated collections of premium gifts
          </p>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <Link
                      to={`/categories/${category.name.toLowerCase()}`}
                      className="btn btn-primary"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{category.name}</h3>
                  <p className="card-text">
                    {category.count} products available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Handpicked premium gifts for every occasion
          </p>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badges">
                    <span className="badge badge-new">New</span>
                    <span className="badge badge-sale">Sale</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-icon">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="btn-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <div className="product-footer">
                    <span className="price">{product.price}</span>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-primary btn-large">
              View All Products
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Why Choose WYNA?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>
                Authentic fabrics and traditional craftsmanship in every piece
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Exquisite Designs</h3>
              <p>
                Curated collection blending tradition with contemporary elegance
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Secure packaging and swift delivery across India</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Expert Support</h3>
              <p>Dedicated assistance to help you find your perfect attire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter animate-fade-in-up">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest news about new products and exclusive offers</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
