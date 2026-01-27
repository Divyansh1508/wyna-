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
      success: false,
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
  console.log(`   GET  /health`);
});