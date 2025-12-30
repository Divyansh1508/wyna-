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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "/api/products";

        if (slug) {
          url += `?category=${slug}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        toast.error("Failed to load products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>

        <div className="filter-section">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Products
          </button>
          <button
            className={filter === "popular" ? "active" : ""}
            onClick={() => setFilter("popular")}
          >
            Popular
          </button>
          <button
            className={filter === "new" ? "active" : ""}
            onClick={() => setFilter("new")}
          >
            New Arrivals
          </button>
        </div>

        {products.length === 0 ? (
          <div className="no-products">
            <p>No products found.</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
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
