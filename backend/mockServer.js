const express = require('express');
const cors = require('cors');
const mockData = require('./mockData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Mock API Routes
app.get('/api/products/featured/home', (req, res) => {
  console.log('Serving mock featured products');
  res.json(mockData.mockEndpoints['/api/products/featured/home']);
});

app.get('/api/categories/featured', (req, res) => {
  console.log('Serving mock featured categories');
  res.json(mockData.mockEndpoints['/api/categories/featured']);
});

app.get('/api/products', (req, res) => {
  console.log('Serving mock products');
  res.json({
    success: true,
    data: mockData.MOCK_PRODUCTS
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = mockData.MOCK_PRODUCTS.find(p => p._id === req.params.id);
  if (product) {
    res.json({
      success: true,
      data: product
    });
  } else {
    res.status(404).json({
      success: true,
      message: 'Product not found'
    });
  }
});

app.get('/api/categories', (req, res) => {
  console.log('Serving mock categories');
  res.json({
    success: true,
    data: mockData.MOCK_CATEGORIES
  });
});

// Mock Auth Routes
app.post('/api/auth/admin/register', (req, res) => {
  console.log('Serving mock admin registration');
  res.json({
    success: true,
    message: 'Registration successful! Please login.',
    data: {
      id: 'mock-admin-id',
      name: req.body.name || 'Mock Admin',
      email: req.body.email || 'mock@example.com'
    }
  });
});

app.post('/api/auth/admin/login', (req, res) => {
  console.log('Serving mock admin login');
  res.json({
    success: true,
    message: 'Login successful!',
    token: 'mock-jwt-token-for-development',
    admin: {
      id: 'mock-admin-id',
      name: req.body.email ? req.body.email.split('@')[0] : 'Mock Admin',
      email: req.body.email || 'mock@example.com'
    }
  });
});

app.get('/api/auth/admin/verify', (req, res) => {
  console.log('Serving mock admin verification');
  res.json({
    success: true,
    message: 'Token verified',
    admin: {
      id: 'mock-admin-id',
      name: 'Mock Admin',
      email: 'mock@example.com'
    }
  });
});

// Mock Orders Routes
app.get('/api/orders/admin/all', (req, res) => {
  console.log('Serving mock orders');
  res.json({
    success: true,
    data: [] // Empty array for now
  });
});

// Mock Images Routes
app.get('/api/images/types', (req, res) => {
  console.log('Serving mock image types');
  res.json({
    success: true,
    data: ['products', 'categories', 'banners']
  });
});

app.get('/api/images/list/:type', (req, res) => {
  console.log('Serving mock images for type:', req.params.type);
  res.json({
    success: true,
    data: [
      { url: '/Asset/product/placeholder.jpg', filename: 'sample-image.jpg', size: 102400 },
      { url: '/Asset/product/placeholder.jpg', filename: 'sample-image2.jpg', size: 204800 }
    ]
  });
});

// Mock Upload Routes
app.post('/api/upload/multiple/:type', (req, res) => {
  console.log('Serving mock image upload for type:', req.params.type);
  res.json({
    success: true,
    message: 'Images uploaded successfully',
    urls: [
      { url: '/Asset/product/placeholder.jpg', filename: 'uploaded-image.jpg' }
    ]
  });
});

// Mock Orders Status Route
app.put('/api/orders/admin/:orderId/status', (req, res) => {
  console.log('Serving mock order status update for order:', req.params.orderId);
  res.json({
    success: true,
    message: 'Order status updated successfully'
  });
});

// Mock Product Deletion Route
app.delete('/api/products/:productId', (req, res) => {
  console.log('Serving mock product deletion for product:', req.params.productId);
  res.json({
    success: true,
    message: 'Product deleted successfully'
  });
});

// Mock Category Deletion Route
app.delete('/api/categories/:categoryId', (req, res) => {
  console.log('Serving mock category deletion for category:', req.params.categoryId);
  res.json({
    success: true,
    message: 'Category deleted successfully'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Mock API server running',
    timestamp: new Date().toISOString()
  });
});

// Catch-all for undefined routes
app.use('*', (req, res) => {
  console.log(`404 - Route not found: ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Mock API Server running on port ${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET  /api/products/featured/home`);
  console.log(`   GET  /api/categories/featured`);
  console.log(`   GET  /api/products`);
  console.log(`   GET  /api/products/:id`);
  console.log(`   GET  /api/categories`);
  console.log(`   POST /api/auth/admin/register`);
  console.log(`   POST /api/auth/admin/login`);
  console.log(`   GET  /api/auth/admin/verify`);
  console.log(`   GET  /api/orders/admin/all`);
  console.log(`   GET  /api/images/types`);
  console.log(`   GET  /api/images/list/:type`);
  console.log(`   POST /api/upload/multiple/:type`);
  console.log(`   PUT  /api/orders/admin/:orderId/status`);
  console.log(`   DELETE /api/products/:productId`);
  console.log(`   DELETE /api/categories/:categoryId`);
  console.log(`   GET  /health`);
});