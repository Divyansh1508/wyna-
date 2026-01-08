import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
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

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail-simple">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn-simple">
          ← Back
        </button>

        <div className="detail-grid-simple">
          <div className="product-image-container">
            <img
              src={product.image || "/images/placeholder.jpg"}
              alt={product.name}
              className="product-image-simple"
            />
          </div>

          <div className="product-info-simple">
            <h1 className="product-name-simple">{product.name}</h1>
            <div className="price-container-simple">
              <span className="price-label-simple">Price:</span>
              <h2 className="product-price-simple">₹{product.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
