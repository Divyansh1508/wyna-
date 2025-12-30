import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Corporate Gift Basket',
      price: '₹2,499',
      image: '/images/gift-basket-1.jpg',
      description: 'Elegant assortment of premium chocolates, nuts, and gourmet treats'
    },
    {
      id: 2,
      name: 'Custom Hamper Deluxe',
      price: '₹3,999',
      image: '/images/hamper-1.jpg',
      description: 'Personalized luxury hamper with artisanal products and custom branding'
    },
    {
      id: 3,
      name: 'Executive Gift Set',
      price: '₹1,899',
      image: '/images/gift-set-1.jpg',
      description: 'Sophisticated gift set perfect for corporate gifting and special occasions'
    }
  ];

  const categories = [
    { name: 'Gift Baskets', count: 25, image: '/images/category-basket.jpg' },
    { name: 'Corporate Hampers', count: 18, image: '/images/category-hampers.jpg' },
    { name: 'Premium Chocolates', count: 32, image: '/images/category-chocolates.jpg' },
    { name: 'Gourmet foods', count: 28, image: '/images/category-gourmet.jpg' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero animate-fade-in-up">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Premium corporate Gifts & 
              <span className="highlight"> Custom Hampers</span>
            </h1>
            <p className="hero-subtitle">
              Thoughtful gifting solutions since 2012. Create lasting impressions with our curated collection of premium gifts and personalized hampers.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
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
            <img src="/images/hero-gifts.jpg" alt="Premium corporate Gifts" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Discover our curated collections of premium gifts</p>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <Link to={`/categories/${category.name.toLowerCase()}`} className="btn btn-primary">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{category.name}</h3>
                  <p className="card-text">{category.count} products available</p>
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
          <p className="section-subtitle">Handpicked premium gifts for every occasion</p>
          
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
                    <Link to={`/products/${product.id}`} className="btn btn-outline">
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
          <h2 className="section-title">Why Choose Hamp8?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gift"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>Only the finest products curated for exceptional gifting experiences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Custom Design</h3>
              <p>Personalized hampers and gifts tailored to your brand and occasion</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Reliable nationwide delivery with premium packaging and care</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Expert Support</h3>
              <p>Dedicated customer service to help you find the perfect gift</p>
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
