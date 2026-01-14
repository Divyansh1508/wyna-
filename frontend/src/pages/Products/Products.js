import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Products.css";

// Demo Products Data
const demoProducts = [
  {
    _id: "1",
    name: "Orange silk",
    price: 2799,
    category: "saree",
    image: "/Asset/product/1 (1).jpeg",
    buyNowButton: true,
  },
  {
    _id: "2",
    name: "Wyna Premium silk",
    price: 2099,
    category: "saree",
    image: "/Asset/product/1 (2).jpeg",
    buyNowButton: true,
  },
  {
    _id: "3",
    name: "Premium Muslin silk",
    price: 2099,
    category: "saree",
    image: "/Asset/product/1 (3).jpeg",
    buyNowButton: true,
  },
  {
    _id: "4",
    name: "Pure Katan Slik",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (4).jpeg",
    buyNowButton: true,
  },
  {
    _id: "5",
    name: "Organza Silk",
    price: 2799,
    category: "saree",
    image: "/Asset/product/1 (5).jpeg",
    buyNowButton: true,
  },
  {
    _id: "6",
    name: "Wyna Special - Pashmina Silk",
    price: 4999,
    category: "saree",
    image: "/Asset/product/1 (6).jpeg",
    buyNowButton: true,
  },
  {
    _id: "7",
    name: "Banarasi Bridal Silk",
    price: 3999,
    category: "saree",
    image: "/Asset/product/1 (7).jpeg",
    buyNowButton: true,
  },
  {
    _id: "8",
    name: "Pure Katan Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (8).jpeg",
    buyNowButton: true,
  },
  {
    _id: "9",
    name: "Muslin Silk",
    price: 2499,
    category: "saree",
    image: "/Asset/product/1 (9).jpeg",
    buyNowButton: true,
  },
  {
    _id: "10",
    name: "Pure Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (10).jpeg",
    buyNowButton: true,
  },
  {
    _id: "11",
    name: "Wyna Premium Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (11).jpeg",
    buyNowButton: true,
  },
  {
    _id: "12",
    name: "Muslin Silk",
    price: 2499,
    category: "saree",
    image: "/Asset/product/1 (12).jpeg",
    buyNowButton: true,
  },
  {
    _id: "13",
    name: "Wyna Premium Silk",
    price: 4199,
    category: "saree",
    image: "/Asset/product/1 (13).jpeg",
    buyNowButton: true,
  },
  {
    _id: "14",
    name: "Wyna Special - Pashmina Silk",
    price: 4500,
    category: "saree",
    image: "/Asset/product/1 (14).jpeg",
    buyNowButton: true,
  },
  {
    _id: "15",
    name: "Pure Katan Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (15).jpeg",
    buyNowButton: true,
  },
  {
    _id: "16",
    name: "Wyna Premium Silk",
    price: 4199,
    category: "saree",
    image: "/Asset/product/1 (16).jpeg",
    buyNowButton: true,
  },
  {
    _id: "17",
    name: "Pure Katan Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (17).jpeg",
    buyNowButton: true,
  },
  {
    _id: "18",
    name: "Pure Katan Silk",
    price: 3799,
    category: "saree",
    image: "/Asset/product/1 (18).jpeg",
    buyNowButton: true,
  },
];

const Products = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState(demoProducts);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(demoProducts);

  useEffect(() => {
    // Using demo products instead of API call
    setProducts(demoProducts);
    setFilteredProducts(demoProducts);
    setLoading(false);
  }, [slug]);

  const handleFilter = (filterType) => {
    setFilter(filterType);
    const productsArray = Array.isArray(products) ? products : [];
    if (filterType === "all") {
      setFilteredProducts(productsArray);
    } else if (filterType === "popular") {
      setFilteredProducts(
        productsArray.slice(0, Math.ceil(productsArray.length / 2))
      );
    } else if (filterType === "new") {
      setFilteredProducts(
        productsArray.slice(Math.ceil(productsArray.length / 2))
      );
    }
  };

  const handleBuyNow = (product) => {
    const phoneNumber = "918744923702"; // Replace with your WhatsApp number with country code, e.g.
    const message = `I am interested in buying the product: ${product.name} priced at ₹${product.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="products-loading">
        <div className="spinner"></div>Loading our exquisite collection...
      </div>
    );
  }

  const safeFilteredProducts = Array.isArray(filteredProducts)
    ? filteredProducts
    : [];

  return (
    <>
      {/* Hero Section */}
      <div className="products-hero">
        <div className="container">
          <h1 className="products-title">Our Exquisite Collection</h1>
          <p className="products-subtitle">
            Discover handcrafted sarees with premium quality and unique designs
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filter-section">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            <i className="fas fa-th"></i> All Products
          </button>
          <button
            className={`filter-btn ${filter === "popular" ? "active" : ""}`}
            onClick={() => handleFilter("popular")}
          >
            <i className="fas fa-fire"></i> Popular
          </button>
          <button
            className={`filter-btn ${filter === "new" ? "active" : ""}`}
            onClick={() => handleFilter("new")}
          >
            <i className="fas fa-sparkles"></i> New Arrivals
          </button>
        </div>

        {safeFilteredProducts.length === 0 ? (
          <div className="no-products">
            <i className="fas fa-inbox"></i>
            <p>No products found in this category.</p>
            <Link to="/" className="btn-back">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {safeFilteredProducts.map((product) => (
              <div key={product._id} className="product-card">
                <div
                  className="product-link"
                  onClick={() => product.buyNowButton && handleBuyNow(product)}
                  style={{
                    cursor: product.buyNowButton ? "pointer" : "default",
                  }}
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        console.error(`Failed to load image: ${product.image}`);
                        e.target.onerror = null; // Prevent infinite loop if placeholder also fails
                        e.target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23e0e0e0'%3E%3Crect width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='10' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";
                      }}
                      onLoad={(e) =>
                        console.log(`Successfully loaded: ${product.image}`)
                      }
                    />
                    <div style={{ display: "none" }}>
                      Debug: {product.image}
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-footer">
                      <span className="price">₹{product.price}</span>
                      <span className="category">{product.category}</span>
                    </div>
                  </div>
                </div>
                {product.buyNowButton && (
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="btn-buy-now"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
