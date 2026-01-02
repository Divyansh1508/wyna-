import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AuraWeaver from "../../components/AuraWeaver/AuraWeaver";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Banarasi Handcrafted Saree - Variant 1",
      price: "₹8,500",
      image: "/Asset/11.png",
      description:
        "Exquisite handwoven Banarasi saree with traditional golden zari work",
      series: "Series 01",
      exclusive: true,
    },
    {
      id: 2,
      name: "Banarasi Handcrafted Saree - Variant 2",
      price: "₹9,200",
      image:
        "/Asset/12.png",
      description:
        "Pure silk Banarasi masterpiece with intricate meenakari patterns",
      series: "Series 01",
      exclusive: true,
    },
    {
      id: 3,
      name: "Banarasi Handcrafted Saree - Variant 3",
      price: "₹7,800",
      image:
        "/Asset/13.png",
      description: "Heritage Banarasi weave with antique gold zari borders",
      series: "Series 01",
      exclusive: true,
    },
    {
      id: 4,
      name: "Banarasi Handcrafted Saree - Variant 4",
      price: "₹8,900",
      image:
        "/Asset/14.png",
      description:
        "Royal blue silk with golden paisley motifs and ornate border",
      series: "Series 01",
      exclusive: true,
    },
  ];

  const categories = [
    {
      name: "Series 01 - Banarasi",
      count: 47,
      image:
        "/Asset/11.png",
      description: "Handcrafted Banarasi sarees",
    },
    {
      name: "Coming Soon",
      count: 0,
      image:
        "/Asset/12.png",
      description: "Exclusive new series",
    },
    {
      name: "Heritage Collection",
      count: 15,
      image:
        "/Asset/13.png",
      description: "Vintage masterpieces",
    },
    {
      name: "Bridal Aura",
      count: 12,
      image:
        "/Asset/14.png",
      description: "Wedding exclusives",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero animate-fade-in-up">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              WYNA
              <span className="highlight"> Weave Your New Aura</span>
            </h1>
            <p className="hero-subtitle">
              Where tradition meets timeless luxury. Each saree is not just
              attire, but an aura — woven with heritage, elegance, and
              individuality. Experience exclusive, one-of-a-kind creations
              curated for the discerning woman.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-gold">
                <i className="fas fa-shopping-bag"></i>
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline">
                <i className="fas fa-info-circle"></i>
                Download Catalog
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/Asset/model.png" alt="WYNA - Premium Ethnic Wear" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Exclusive Series</h2>
          <p className="section-subtitle">
            Discover our curated collections of premium traditional sarees
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
                  <p className="card-text">{category.description}</p>
                  <p className="card-count">
                    {category.count} {category.count === 1 ? "saree" : "sarees"}{" "}
                    available
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
          <h2 className="section-title">Series 01: Banarasi Handcrafted</h2>
          <p className="section-subtitle">
            11 exquisite variants • 47 unique articles • No repetition, no
            identical combinations
          </p>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badges">
                    {product.exclusive && (
                      <span className="badge badge-exclusive">Exclusive</span>
                    )}
                    <span className="badge badge-series">{product.series}</span>
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
              Explore Series 01
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">The WYNA Philosophy</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>One-of-a-Kind</h3>
              <p>
                No repeated sarees, no identical color combinations. Every piece
                carries its own identity.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Curated Tradition</h3>
              <p>
                Series-based limited collections. Luxury at WYNA is intentional
                and rare.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hand-sparkles"></i>
              </div>
              <h3>Handcrafted Excellence</h3>
              <p>
                Traditional weaving techniques passed down through generations
                of master craftsmen.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Authentic Heritage</h3>
              <p>
                Under Shrinaya Parampara (Since 2025), founded by Mrs. Garima
                Singh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Why Choose WYNA</h2>
          <p className="section-subtitle">
            Experience luxury that goes beyond just fabric and threads
          </p>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <div className="why-content">
                <h3>Premium Quality Silk</h3>
                <p>
                  Only the finest pure silk sourced from Banaras, known for its
                  lustrous sheen and durability.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <div className="why-content">
                <h3>Artisan Collaboration</h3>
                <p>
                  We work directly with master weavers, ensuring fair wages and
                  preserving traditional craftsmanship.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <div className="why-content">
                <h3>Limited Edition Series</h3>
                <p>
                  Each series is carefully curated with limited quantities,
                  ensuring exclusivity for our customers.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">04</div>
              <div className="why-content">
                <h3>Quality Assurance</h3>
                <p>
                  Every saree undergoes rigorous quality checks before reaching
                  you, with authentication certificates.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">05</div>
              <div className="why-content">
                <h3>Lifetime Support</h3>
                <p>
                  Get expert care instructions and lifetime assistance for your
                  treasured WYNA saree.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">06</div>
              <div className="why-content">
                <h3>Secure Shipping</h3>
                <p>
                  Premium packaging with insurance and tracking for safe
                  delivery across India and worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">Your Journey to Elegance</h2>
          <p className="section-subtitle">
            From selection to delivery - experience seamless luxury shopping
          </p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="step-content">
                <h3>Explore Collections</h3>
                <p>
                  Browse our curated series and discover your perfect saree from
                  our exclusive collections.
                </p>
              </div>
              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="step-content">
                <h3>Customize Your Aura</h3>
                <p>
                  Use our Aura Weaver tool to visualize and personalize your
                  saree design preferences.
                </p>
              </div>
              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="step-content">
                <h3>Easy Checkout</h3>
                <p>
                  Secure payment options with multiple gateways and hassle-free
                  order placement.
                </p>
              </div>
              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <i className="fas fa-gift"></i>
              </div>
              <div className="step-content">
                <h3>Luxury Packaging</h3>
                <p>
                  Receive your saree in premium packaging with authentication
                  certificate and care instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials animate-fade-in-up">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real stories from women who discovered their perfect aura with WYNA
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">
                  "The Banarasi saree I purchased exceeded all expectations. The
                  craftsmanship is exceptional, and I felt like royalty wearing
                  it. WYNA truly understands elegance."
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Priya Sharma"
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>Priya Sharma</h4>
                    <p>Mumbai, Wedding Collection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">
                  "Every saree from WYNA tells a unique story. The Heritage
                  Collection piece I bought has become my most treasured
                  possession. Absolutely worth every penny!"
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Ananya Reddy"
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>Ananya Reddy</h4>
                    <p>Hyderabad, Heritage Lover</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">
                  "The Bridal Aura series made my special day even more
                  memorable. The attention to detail and quality of fabric is
                  unmatched. Thank you, WYNA!"
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Kavya Patel"
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>Kavya Patel</h4>
                    <p>Ahmedabad, Bridal Aura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Feed Section */}
          <div className="instagram-section">
            <h3 className="instagram-title">#WYNAAura on Instagram</h3>
            <div className="instagram-grid">
              <div className="instagram-item">
                <img
                  src="/Asset/11.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>1.2k likes</span>
                </div>
              </div>
              <div className="instagram-item">
                <img
                  src="/Asset/12.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>987 likes</span>
                </div>
              </div>
              <div className="instagram-item">
                <img
                  src="/Asset/13.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>1.5k likes</span>
                </div>
              </div>
              <div className="instagram-item">
                <img
                  src="/Asset/14.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>756 likes</span>
                </div>
              </div>
              <div className="instagram-item">
                <img
                  src="/Asset/11.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>892 likes</span>
                </div>
              </div>
              <div className="instagram-item">
                <img
                  src="/Asset/13.png"
                  alt="WYNA on Instagram"
                />
                <div className="instagram-overlay">
                  <i className="fab fa-instagram"></i>
                  <span>1.1k likes</span>
                </div>
              </div>
            </div>
            <div className="instagram-cta">
              <a
                href="https://instagram.com/wyna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fab fa-instagram"></i>
                Follow @wyna
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aura Weaver Interactive Tool */}
      <section className="aura-weaver-section animate-fade-in-up">
        <div className="container">
          <AuraWeaver />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter animate-fade-in-up">
        <div className="container">
          <div className="newsletter-content">
            <h2>Embrace Your Aura</h2>
            <p>
              Receive exclusive updates about new series and limited edition
              collections
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Join WYNA
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
