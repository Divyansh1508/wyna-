import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import API_CONFIG from "../../config/api";
import "./MyOrders.css";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchOrders();
  }, [currentPage, filter]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if (!token) {
        toast.error("Please login to view your orders");
        navigate("/login");
        return;
      }

      const params = {
        page: currentPage,
        limit: 10
      };
      
      if (filter !== "all") {
        params.status = filter;
      }

      const response = await axios.get(
        API_CONFIG.buildUrl('/api/orders'),
        {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          params
        }
      );

      if (response.data.success) {
        setOrders(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      if (error.response?.status === 401) {
        toast.error("Please login to view your orders");
        navigate("/login");
      } else {
        toast.error("Failed to load orders");
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      pending: "status-pending",
      confirmed: "status-confirmed",
      processing: "status-processing",
      shipped: "status-shipped",
      delivered: "status-delivered",
      cancelled: "status-cancelled"
    };
    return statusClasses[status] || "status-default";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(amount);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="my-orders-page">
        <div className="container">
          <div className="loading">Loading your orders...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-orders-page">
      <div className="container">
        <div className="page-header">
          <h1>My Orders</h1>
          <p>Track and manage your orders</p>
        </div>

        <div className="filters">
          <select 
            value={filter} 
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="filter-select"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {orders.length === 0 ? (
          <div className="no-orders">
            <div className="empty-state">
              <i className="fas fa-shopping-bag empty-icon"></i>
              <h3>No Orders Found</h3>
              <p>You haven't placed any orders yet.</p>
              <button 
                className="btn-shop-now"
                onClick={() => navigate("/products")}
              >
                Shop Now
              </button>
            </div>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order.orderNumber}</h3>
                    <p className="order-date">Placed on {formatDate(order.createdAt)}</p>
                  </div>
                  <div className="order-status">
                    <span className={`status-badge ${getStatusBadgeClass(order.orderStatus)}`}>
                      {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="order-details">
                  <div className="order-summary">
                    <div className="items-preview">
                      {order.items?.slice(0, 2).map((item, index) => (
                        <div key={index} className="item-preview">
                          {item.product?.images?.[0] && (
                            <img 
                              src={`${API_CONFIG.BASE_URL}${item.product.images[0].url}`}
                              alt={item.name}
                              className="item-thumb"
                            />
                          )}
                          <div className="item-info">
                            <p className="item-name">{item.name}</p>
                            <p className="item-qty">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                      {order.items?.length > 2 && (
                        <p className="more-items">+{order.items.length - 2} more items</p>
                      )}
                    </div>
                    
                    <div className="order-totals">
                      <p className="total-amount">{formatCurrency(order.totalAmount)}</p>
                      <p className="item-count">{order.items?.length || 0} items</p>
                    </div>
                  </div>

                  <div className="order-actions">
                    <button 
                      className="btn-view-details"
                      onClick={() => navigate(`/orders/${order._id}`)}
                    >
                      View Details
                    </button>
                    {order.orderStatus === 'pending' && (
                      <button 
                        className="btn-cancel"
                        onClick={() => {
                          if (window.confirm("Are you sure you want to cancel this order?")) {
                            // Implement cancel functionality
                            toast.success("Order cancellation requested");
                          }
                        }}
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            <div className="pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`page-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;