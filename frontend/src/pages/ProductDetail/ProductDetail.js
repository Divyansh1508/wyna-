import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        toast.error("Failed to load product");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart!");
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>

        <div className="detail-grid">
          <div className="product-image-section">
            <img
              src={product.image || "/images/placeholder.jpg"}
              alt={product.name}
              className="main-image"
            />
          </div>

          <div className="product-details-section">
            <h1>{product.name}</h1>

            <div className="rating">
              <span className="stars">⭐ 4.5</span>
              <span className="reviews">(128 reviews)</span>
            </div>

            <div className="price-section">
              <h2 className="price">₹{product.price}</h2>
              <span className="availability">In Stock</span>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="category-info">
              <span className="label">Category:</span>
              <span className="value">{product.category}</span>
            </div>

            <div className="quantity-section">
              <label>Quantity:</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                🛒 Add to Cart
              </button>
              <button
                className="btn-buy-now"
                onClick={() => {
                  handleAddToCart();
                  navigate("/checkout");
                }}
              >
                Buy Now
              </button>
            </div>

            <div className="features">
              <h3>Why Choose This?</h3>
              <ul>
                <li>✓ Premium Quality Products</li>
                <li>✓ Fast Shipping</li>
                <li>✓ Easy Returns</li>
                <li>✓ Secure Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
