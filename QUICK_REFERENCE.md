# WYNA Quick Reference Card

## 🚀 Quick Commands

### Start Everything
```powershell
# Terminal 1: Start MongoDB
mongod

# Terminal 2: Start Application
cd C:\Users\divya\Desktop\web
npm run dev
```

### Individual Services
```powershell
# Backend only
cd backend
npm run dev

# Frontend only
cd frontend
npm start
```

## 🌐 URLs

| Service | URL |
|---------|-----|
| **Frontend** | http://localhost:3000 |
| **Backend API** | http://localhost:5000 |
| **Admin Panel** | http://localhost:3000/admin |

## 🔐 Credentials

**Admin Dashboard**
- Password: `wyna2027`

## 🎨 Brand Colors

```css
Primary Red:   #8B0000
Light Red:     #B22222
Dark Red:      #6B0000
Golden:        #FFD700
Light Golden:  #FFA500
```

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured products |
| Products | `/products` | All products listing |
| Product Detail | `/products/:id` | Single product page |
| Cart | `/cart` | Shopping cart |
| Checkout | `/checkout` | Order completion |
| About | `/about` | About WYNA |
| Contact | `/contact` | Contact form |
| Admin | `/admin` | Dashboard (Protected) |

## 📁 Important Files

### Configuration
- `backend/.env` - Environment variables
- `frontend/public/logo.jpeg` - Logo image

### Key Components
- `frontend/src/App.js` - Main app
- `frontend/src/components/Header/Header.js` - Navigation
- `frontend/src/pages/Admin/AdminDashboard.js` - Admin panel
- `backend/server.js` - API server

## 🔧 Common Issues

**Port Already in Use**
```powershell
# Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**MongoDB Not Running**
```powershell
# Start MongoDB
mongod
```

**Dependencies Issue**
```powershell
# Reinstall
rm -rf node_modules
npm install
```

**Logo Not Showing**
- Check: `frontend/public/logo.jpeg` exists
- Clear cache: Ctrl + Shift + R

## 📊 API Endpoints

### Products
- `GET /api/products` - All products
- `GET /api/products/:id` - Single product
- `POST /api/products` - Create (Admin)
- `PUT /api/products/:id` - Update (Admin)
- `DELETE /api/products/:id` - Delete (Admin)

### Orders
- `GET /api/orders` - All orders (Admin)
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id` - Update status (Admin)

### Categories
- `GET /api/categories` - All categories
- `POST /api/categories` - Create (Admin)

## ✅ Pre-Demo Checklist

- [ ] MongoDB running
- [ ] Backend running (port 5000)
- [ ] Frontend running (port 3000)
- [ ] Logo in place
- [ ] Admin access works
- [ ] Mobile view tested
- [ ] Red/golden theme visible

## 🎯 Demo Flow

1. Show Homepage → Elegant hero
2. Browse Products → Categories
3. Add to Cart → Show cart
4. Admin Login → Dashboard
5. Manage Products → Edit/Delete
6. Check Orders → Update status
7. Mobile View → Responsive design

---

**WYNA - Weave Your New Aura** 🎊
