import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Products.css";

const Products = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "/api/products";

        if (slug) {
          url += `?category=${slug}`;
        }

        const response = await axios.get(url);
        const productsData = Array.isArray(response.data) ? response.data : [];
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        toast.error("Failed to load products");
        console.error(error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
    <div className="products-page">
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
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                className="product-card"
              >
                <div className="product-image">
                  <img
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                  />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="description">
                    {product.description?.substring(0, 60)}...
                  </p>
                  <div className="product-footer">
                    <span className="price">₹{product.price}</span>
                    <span className="category">{product.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
