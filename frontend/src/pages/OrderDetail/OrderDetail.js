import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import API_CONFIG from "../../config/api";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdminView, setIsAdminView] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  useEffect(() => {
    // Check if user is admin (based on URL or token)
    const adminToken = localStorage.getItem("adminToken");
    setIsAdminView(!!adminToken);
    
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken") || localStorage.getItem("token");
      const headers = {
        ...(token && { "Authorization": `Bearer ${token}` })
      };

      let response;
      if (localStorage.getItem("adminToken")) {
        // Admin view - fetch any order
        response = await axios.get(
          API_CONFIG.buildUrl(`/api/orders/${id}`),
          { headers }
        );
      } else {
        // Customer view - fetch own order
        response = await axios.get(
          API_CONFIG.buildUrl(`/api/orders/${id}`),
          { headers }
        );
      }

      if (response.data.success) {
        setOrder(response.data.data);
        setNewStatus(response.data.data.orderStatus);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      toast.error("Failed to load order details");
      navigate("/"); // Redirect on error
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async () => {
    if (!newStatus) return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.put(
        API_CONFIG.buildUrl(`/api/orders/admin/${id}/status`),
        { status: newStatus, trackingNumber },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        toast.success("Order status updated successfully");
        setOrder(response.data.data);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Failed to update order status");
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
    return new Date(dateString).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="order-detail-page">
        <div className="container">
          <div className="loading">Loading order details...</div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-detail-page">
        <div className="container">
          <div className="error-message">
            <h2>Order Not Found</h2>
            <p>The order you're looking for doesn't exist or you don't have permission to view it.</p>
            <button className="btn-primary" onClick={() => navigate("/")}>
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-detail-page">
      <div className="container">
        <div className="order-header">
          <div className="header-left">
            <h1>Order Details</h1>
            <div className="order-meta">
              <span className="order-number">Order #{order.orderNumber}</span>
              <span className="order-date">Placed on {formatDate(order.createdAt)}</span>
            </div>
          </div>
          
          <div className="header-right">
            <span className={`status-badge ${getStatusBadgeClass(order.orderStatus)}`}>
              {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
            </span>
            
            {isAdminView && (
              <div className="admin-actions">
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="status-select"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                {(newStatus === "shipped" || newStatus === "delivered") && (
                  <input
                    type="text"
                    placeholder="Tracking Number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="tracking-input"
                  />
                )}
                <button 
                  className="btn-update-status"
                  onClick={updateOrderStatus}
                  disabled={!newStatus || newStatus === order.orderStatus}
                >
                  Update Status
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="order-content">
          <div className="order-info-grid">
            {/* Customer Information */}
            <div className="info-card">
              <h3>Customer Information</h3>
              <div className="info-details">
                <p><strong>Name:</strong> {order.shippingAddress?.fullName}</p>
                <p><strong>Email:</strong> {order.user?.email || "N/A"}</p>
                <p><strong>Phone:</strong> {order.shippingAddress?.phone}</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="info-card">
              <h3>Shipping Address</h3>
              <div className="info-details">
                <p>{order.shippingAddress?.fullName}</p>
                <p>{order.shippingAddress?.street}</p>
                <p>{order.shippingAddress?.city}, {order.shippingAddress?.state}</p>
                <p>PIN: {order.shippingAddress?.zipCode}</p>
                <p>{order.shippingAddress?.country}</p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="info-card">
              <h3>Payment Details</h3>
              <div className="info-details">
                <p><strong>Method:</strong> {order.paymentMethod?.toUpperCase()}</p>
                <p><strong>Status:</strong> {order.paymentStatus || "Completed"}</p>
                {order.trackingNumber && (
                  <p><strong>Tracking:</strong> {order.trackingNumber}</p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="info-card">
              <h3>Order Summary</h3>
              <div className="info-details">
                <p><strong>Items:</strong> {order.items?.length || 0}</p>
                <p><strong>Subtotal:</strong> {formatCurrency(order.subtotal)}</p>
                <p><strong>Tax (18%):</strong> {formatCurrency(order.tax)}</p>
                <p><strong>Shipping:</strong> {formatCurrency(order.shippingCost)}</p>
                {order.discount > 0 && (
                  <p><strong>Discount:</strong> -{formatCurrency(order.discount)}</p>
                )}
                <hr />
                <p className="total-amount"><strong>Total:</strong> {formatCurrency(order.totalAmount)}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="items-section">
            <h2>Order Items</h2>
            <div className="items-list">
              {order.items?.map((item, index) => (
                <div key={index} className="item-card">
                  {item.product?.images?.[0] && (
                    <img 
                      src={`${API_CONFIG.BASE_URL}${item.product.images[0].url}`}
                      alt={item.name}
                      className="item-image"
                    />
                  )}
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {formatCurrency(item.price)} each</p>
                    <p className="item-total">Total: {formatCurrency(item.price * item.quantity)}</p>
                    {item.product && (
                      <button 
                        className="btn-view-product"
                        onClick={() => navigate(`/product/${item.product.slug || item.product._id}`)}
                      >
                        View Product
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h2>Order Timeline</h2>
            <div className="timeline">
              <div className={`timeline-item ${order.orderStatus !== 'pending' ? 'completed' : 'active'}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Order Placed</h4>
                  <p>{formatDate(order.createdAt)}</p>
                </div>
              </div>
              
              {order.orderStatus !== 'pending' && (
                <div className={`timeline-item ${['confirmed', 'processing', 'shipped', 'delivered'].includes(order.orderStatus) ? 'completed' : ''}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Order Confirmed</h4>
                    <p>Order has been confirmed and is being processed</p>
                  </div>
                </div>
              )}
              
              {['processing', 'shipped', 'delivered'].includes(order.orderStatus) && (
                <div className={`timeline-item ${['shipped', 'delivered'].includes(order.orderStatus) ? 'completed' : 'active'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Processing</h4>
                    <p>Your order is being prepared for shipment</p>
                  </div>
                </div>
              )}
              
              {['shipped', 'delivered'].includes(order.orderStatus) && (
                <div className={`timeline-item ${order.orderStatus === 'delivered' ? 'completed' : 'active'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Shipped</h4>
                    {order.trackingNumber && <p>Tracking #: {order.trackingNumber}</p>}
                    <p>Your order has been shipped</p>
                  </div>
                </div>
              )}
              
              {order.orderStatus === 'delivered' && (
                <div className="timeline-item completed">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Delivered</h4>
                    {order.deliveredAt && <p>{formatDate(order.deliveredAt)}</p>}
                    <p>Your order has been delivered successfully</p>
                  </div>
                </div>
              )}
              
              {order.orderStatus === 'cancelled' && (
                <div className="timeline-item cancelled">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Cancelled</h4>
                    {order.cancelledAt && <p>{formatDate(order.cancelledAt)}</p>}
                    {order.cancellationReason && <p>Reason: {order.cancellationReason}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="actions-footer">
          {!isAdminView && order.orderStatus === 'pending' && (
            <button 
              className="btn-cancel-order"
              onClick={() => {
                if (window.confirm("Are you sure you want to cancel this order?")) {
                  // Implement cancel order functionality
                  toast.success("Order cancellation requested");
                }
              }}
            >
              Cancel Order
            </button>
          )}
          <button 
            className="btn-back"
            onClick={() => navigate(isAdminView ? "/admin" : "/")}
          >
            {isAdminView ? "Back to Dashboard" : "Back to Home"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;