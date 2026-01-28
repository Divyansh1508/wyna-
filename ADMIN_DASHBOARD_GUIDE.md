# WYNA Admin Dashboard Access Guide

## 🚀 How to Access Admin Dashboard

### Method 1: Direct Navigation (Recommended)
1. Open your browser and go to: `http://localhost:3000/admin`
2. The system will automatically authenticate using the admin credentials:
   - **Email**: admin@wyna.com
   - **Password**: admin123

### Method 2: Manual Login
If automatic login doesn't work:
1. Go to `http://localhost:3000/admin`
2. Enter password: `wyna2027` when prompted

## 📋 Admin Dashboard Features

### Dashboard Overview
- **📊 Overview Tab**: Shows key metrics
  - Total Products
  - Total Orders
  - Total Revenue
  - Pending Orders

### Product Management
- **📦 Products Tab**: 
  - View all products
  - Add new products (click "+ Add New Product" button)
  - Edit existing products
  - Delete products
  - See product details

### Order Management
- **🛍️ Orders Tab**:
  - View all customer orders
  - Update order status (Pending → Processing → Shipped → Delivered)
  - View order details
  - Filter orders by status

### Category Management
- **🏷️ Categories Tab**:
  - View all categories
  - See category descriptions

## ➕ Adding New Products

1. Navigate to **Products** tab in admin dashboard
2. Click **"+ Add New Product"** button
3. Fill in the product details:
   - **Product Name** (required)
   - **Category** (required)
   - **Price** (required)
   - **Discount Price** (optional)
   - **Stock Quantity** (required)
   - **Material** (e.g., Pure Silk, Cotton)
   - **Color** (e.g., Golden, Red, Blue)
   - **Weave Type** (e.g., Handloom)
   - **Short Description**
   - **Full Description** (required)
   - **Care Instructions**
   - **Tags** (comma separated)
   - **Checkboxes**: Customizable, Featured, New Arrival

4. Click **"Add Product"** to save

## 🔍 Viewing Orders

1. Go to **Orders** tab
2. See all orders in table format
3. Update order status using dropdown menus
4. View order details by clicking "View" button

## 🛑 Logout

Click the **"🚪 Logout"** button in the sidebar to logout from admin panel.

## 📱 Mobile Responsiveness

The admin dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## ⚠️ Important Notes

- Make sure both frontend (`npm start`) and backend (`npm run dev`) are running
- Backend should be running on `http://72.60.202.38:5000`
- Frontend should be running on `http://localhost:3000`
- MongoDB database should be connected and seeded

## 🔧 Troubleshooting

### If you can't access the admin panel:
1. Check if backend is running: `http://72.60.202.38:5000/api/health`
2. Check if frontend is running: `http://localhost:3000`
3. Clear browser cache and cookies
4. Try incognito/private browsing mode

### If authentication fails:
1. Make sure you're using the correct credentials
2. Check browser console for errors
3. Verify MongoDB connection
4. Restart both frontend and backend servers

### If products aren't loading:
1. Check browser console for API errors
2. Verify backend is responding: `http://72.60.202.38:5000/api/products`
3. Make sure database is seeded with sample data

## 🎯 Quick Links

- **Frontend**: http://localhost:3000
- **Backend API**: http://72.60.202.38:5000/api
- **Admin Dashboard**: http://localhost:3000/admin
- **Add Product**: http://localhost:3000/admin/products/add

Enjoy managing your WYNA e-commerce store! 🛍️✨