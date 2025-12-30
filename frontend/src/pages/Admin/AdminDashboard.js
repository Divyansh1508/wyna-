import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0
  });

  // Auth check
  useEffect(() => {
    const adminPassword = localStorage.getItem('adminAuth');
    if (!adminPassword) {
      const password = prompt('Enter Admin Password:');
      if (password === 'wyna2027') {
        localStorage.setItem('adminAuth', 'true');
      } else {
        alert('Invalid password!');
        navigate('/');
        return;
      }
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      // Fetch products
      const productsRes = await fetch('http://localhost:5000/api/products');
      const productsData = await productsRes.json();
      setProducts(productsData);

      // Fetch orders
      const ordersRes = await fetch('http://localhost:5000/api/orders');
      const ordersData = await ordersRes.json();
      setOrders(ordersData);

      // Fetch categories
      const categoriesRes = await fetch('http://localhost:5000/api/categories');
      const categoriesData = await categoriesRes.json();
      setCategories(categoriesData);

      // Calculate stats
      const totalRevenue = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
      const pendingOrders = ordersData.filter(order => order.status === 'pending').length;
      
      setStats({
        totalProducts: productsData.length,
        totalOrders: ordersData.length,
        totalRevenue: totalRevenue,
        pendingOrders: pendingOrders
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/');
  };

  const renderOverview = () => (
    <div className="overview-section">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>{stats.totalProducts}</h3>
            <p>Total Products</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🛍️</div>
          <div className="stat-info">
            <h3>{stats.totalOrders}</h3>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <h3>₹{stats.totalRevenue.toLocaleString()}</h3>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h3>{stats.pendingOrders}</h3>
            <p>Pending Orders</p>
          </div>
        </div>
      </div>

      <div className="recent-section">
        <h3>Recent Orders</h3>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map(order => (
                <tr key={order._id}>
                  <td>#{order._id.slice(-8)}</td>
                  <td>{order.shippingAddress?.fullName || 'N/A'}</td>
                  <td>₹{order.totalAmount.toLocaleString()}</td>
                  <td><span className={`status-badge status-${order.status}`}>{order.status}</span></td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="products-section">
      <div className="section-header">
        <h2>Product Management</h2>
        <button className="btn-add" onClick={() => navigate('/admin/products/add')}>
          + Add New Product
        </button>
      </div>
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>
                  <img 
                    src={product.images[0]?.url || '/placeholder.jpg'} 
                    alt={product.name}
                    className="product-thumb"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category?.name || 'N/A'}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.stock}</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="orders-section">
      <h2>Order Management</h2>
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>#{order._id.slice(-8)}</td>
                <td>{order.shippingAddress?.fullName || 'N/A'}</td>
                <td>{order.email}</td>
                <td>₹{order.totalAmount.toLocaleString()}</td>
                <td>
                  <select 
                    className="status-select"
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn-view">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchData();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <img src="/logo.jpeg" alt="WYNA" />
          <h2>WYNA Admin</h2>
        </div>
        <nav className="admin-nav">
          <button 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={activeTab === 'products' ? 'active' : ''}
            onClick={() => setActiveTab('products')}
          >
            📦 Products
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            🛍️ Orders
          </button>
          <button 
            className={activeTab === 'categories' ? 'active' : ''}
            onClick={() => setActiveTab('categories')}
          >
            🏷️ Categories
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h1>Welcome to WYNA Admin Panel</h1>
          <p>Manage your e-commerce platform</p>
        </div>
        
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'products' && renderProducts()}
        {activeTab === 'orders' && renderOrders()}
        {activeTab === 'categories' && (
          <div className="categories-section">
            <h2>Categories</h2>
            <div className="categories-grid">
              {categories.map(category => (
                <div key={category._id} className="category-item">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
