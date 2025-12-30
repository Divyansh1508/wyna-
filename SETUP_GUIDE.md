# Hamp8 E-commerce Application Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
npm run install-server

# Install frontend dependencies
npm run install-client
```

### 2. Environment Configuration

#### Backend Configuration (`.env`)
Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hamp8-ecommerce
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
```

#### Frontend Configuration (`.env`)
The `frontend/.env` file is already configured:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Database Setup
```bash
# Seed the database with initial data
npm run server seed
```
Or from backend directory:
```bash
cd backend
npm run seed
```

### 4. Start the Application

#### Development Mode (both frontend and backend)
```bash
npm run dev
```

#### Production Mode
```bash
# Build frontend
npm run build

# Start backend server
npm run start
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend client
- `npm run build` - Build the frontend for production
- `npm run start` - Start the production server
- `npm run install-server` - Install backend dependencies
- `npm run install-client` - Install frontend dependencies

## API Endpoints

### Products
- `GET /api/products` - Get all products (supports filtering by category, search, sorting)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders` - Get all orders (admin only)

## Project Structure

```
hamp8-ecommerce/
├── backend/
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers (for future use)
│   ├── middleware/       # Custom middleware (for future use)
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── seeders/          # Database seeding scripts
│   ├── uploads/          # File uploads directory
│   └── server.js         # Entry point
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   └── App.js        # Main App component
│   └── package.json
└── README.md
```

## Features Implemented

### Frontend
- ✅ Responsive design matching Hamp8 branding
- ✅ Header with logo, navigation, and search
- ✅ Home page with hero section, categories, and featured products
- ✅ Product listing with filtering and sorting
- ✅ Product detail page with image gallery
- ✅ Shopping cart functionality
- ✅ Checkout process with form validation
- ✅ About and Contact pages
- ✅ Footer with company information

### Backend
- ✅ MongoDB schemas for Products, Categories, and Orders
- ✅ RESTful API endpoints
- ✅ Input validation and error handling
- ✅ Database seeding with sample data
- ✅ CORS support for frontend-backend communication

### Database
- ✅ Product model with categories, pricing, stock management
- ✅ Category model for product organization
- ✅ Order model for purchase tracking
- ✅ Sample data for 6 categories and 2 products

## Customization Notes

### Adding Images
1. Add product images to `backend/uploads/images/products/`
2. Add category images to `backend/uploads/images/categories/`
3. Update the seed data in `backend/seeders/seed.js` with correct image paths

### Styling
- Colors and fonts can be customized in the CSS files
- The design follows Hamp8's professional branding
- All components are fully responsive

### Adding More Features
- User authentication (JWT tokens configured)
- Payment integration (Stripe, Razorpay, etc.)
- Admin dashboard for product management
- Order status tracking
- Email notifications

## Technologies Used

- **Frontend**: React, React Router, Axios, CSS Modules, Font Awesome
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, multer
- **Development**: concurrently, nodemon, react-hot-toast
- **Database**: MongoDB with Mongoose ODM

## Support

For issues or questions, please refer to the contact information in the application or check the documentation in the README file.
