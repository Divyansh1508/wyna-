// API Configuration
console.log('Environment REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://72.60.202.38:5000',
  ACTUAL_BASE_URL: process.env.REACT_APP_API_URL, // For debugging
  
  // API Endpoints
  ENDPOINTS: {
    // Auth
    AUTH_ADMIN_LOGIN: '/api/auth/admin/login',
    AUTH_ADMIN_REGISTER: '/api/auth/admin/register',
    AUTH_ADMIN_VERIFY: '/api/auth/admin/verify',
    
    // Products
    PRODUCTS: '/api/products',
    PRODUCTS_FEATURED: '/api/products/featured/home',
    
    // Categories
    CATEGORIES: '/api/categories',
    CATEGORIES_FEATURED: '/api/categories/featured',
    
    // Orders
    ORDERS_ADMIN_ALL: '/api/orders/admin/all',
    ORDERS_ADMIN_STATUS: (orderId) => `/api/orders/admin/${orderId}/status`,
    
    // Upload
    UPLOAD_MULTIPLE: (type) => `/api/upload/multiple/${type}`,
    
    // Images
    IMAGES_LIST: (type) => `/api/images/list/${type}`,
    IMAGES_TYPES: '/api/images/types'
  },
  
  // Helper method to build full URLs
  buildUrl(endpoint) {
    const fullUrl = `${this.BASE_URL}${endpoint}`;
    console.log('API Config - Building URL:', { 
      baseUrl: this.BASE_URL, 
      endpoint: endpoint, 
      fullUrl: fullUrl 
    });
    return fullUrl;
  }
};

export default API_CONFIG;