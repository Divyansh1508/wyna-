# WYNA E-commerce API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your_token>
```

## Public Endpoints

### Health Check
```
GET /health
```
Response:
```json
{
  "success": true,
  "message": "WYNA E-commerce API is running",
  "timestamp": "2024-01-24T10:30:00.000Z",
  "environment": "development"
}
```

## Auth Routes

### Register User
```
POST /auth/register
```
Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}
```

### Login User
```
POST /auth/login
```
Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
```
GET /auth/me
```
Headers: `Authorization: Bearer <token>`

### Update Profile
```
PUT /auth/update-profile
```
Headers: `Authorization: Bearer <token>`
Request Body:
```json
{
  "name": "John Updated",
  "phone": "9876543211"
}
```

### Update Password
```
PUT /auth/update-password
```
Headers: `Authorization: Bearer <token>`
Request Body:
```json
{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

## Product Routes

### Get All Products
```
GET /products
```
Query Parameters:
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `category` (optional): Category slug
- `search` (optional): Search term
- `sort` (optional): Sort by (price_asc, price_desc, name_asc, name_desc, newest, popularity)
- `minPrice` (optional): Minimum price
- `maxPrice` (optional): Maximum price
- `featured` (optional): true/false
- `newArrival` (optional): true/false
- `inStock` (optional): true/false
- `material` (optional): Material filter
- `color` (optional): Color filter
- `tags` (optional): Comma-separated tags

### Get Single Product
```
GET /products/:id
```

### Get Product by Slug
```
GET /products/slug/:slug
```

### Get Featured Products for Home
```
GET /products/featured/home
```

### Get New Arrivals
```
GET /products/new-arrivals
```

### Get Search Suggestions
```
GET /products/search/suggestions?q=searchterm
```

## Category Routes

### Get All Categories
```
GET /categories
```

### Get Featured Categories
```
GET /categories/featured
```

### Get Single Category
```
GET /categories/:id
```

### Get Category by Slug
```
GET /categories/slug/:slug
```

## Order Routes

### Create Order
```
POST /orders
```
Headers: `Authorization: Bearer <token>`
Request Body:
```json
{
  "items": [
    {
      "product": "product_id",
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "fullName": "John Doe",
    "phone": "9876543210",
    "street": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "zipCode": "400001"
  },
  "paymentMethod": "cod",
  "notes": "Please deliver in evening"
}
```

### Get User Orders
```
GET /orders
```
Headers: `Authorization: Bearer <token>`

### Get Single Order
```
GET /orders/:id
```
Headers: `Authorization: Bearer <token>`

### Cancel Order
```
PUT /orders/:id/cancel
```
Headers: `Authorization: Bearer <token>`
Request Body:
```json
{
  "reason": "Changed my mind about the purchase"
}
```

## Admin Order Routes

### Get All Orders
```
GET /orders/admin/all
```
Headers: `Authorization: Bearer <token>` (Admin only)

### Update Order Status
```
PUT /orders/admin/:id/status
```
Headers: `Authorization: Bearer <token>` (Admin only)
Request Body:
```json
{
  "status": "shipped",
  "trackingNumber": "TRACK123456"
}
```

### Get Order Statistics
```
GET /orders/admin/stats
```
Headers: `Authorization: Bearer <token>` (Admin only)

## Newsletter Routes

### Subscribe to Newsletter
```
POST /newsletter/subscribe
```
Request Body:
```json
{
  "email": "subscriber@example.com",
  "name": "Subscriber Name",
  "preferences": {
    "sareeCollections": true,
    "exclusiveOffers": true,
    "newArrivals": true
  }
}
```

### Unsubscribe from Newsletter
```
POST /newsletter/unsubscribe
```
Request Body:
```json
{
  "email": "subscriber@example.com"
}
```

### Get All Subscribers (Admin)
```
GET /newsletter/subscribers
```
Headers: `Authorization: Bearer <token>` (Admin only)

### Get Newsletter Stats (Admin)
```
GET /newsletter/stats
```
Headers: `Authorization: Bearer <token>` (Admin only)

## Contact Routes

### Submit Contact Form
```
POST /contact
```
Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Product Inquiry",
  "message": "I would like to know more about your sarees...",
  "category": "sales"
}
```

### Get All Contacts (Admin)
```
GET /contact
```
Headers: `Authorization: Bearer <token>` (Admin only)

### Update Contact Status (Admin)
```
PUT /contact/:id/status
```
Headers: `Authorization: Bearer <token>` (Admin only)
Request Body:
```json
{
  "status": "resolved",
  "assignedTo": "user_id"
}
```

### Get Contact Stats (Admin)
```
GET /contact/stats/dashboard
```
Headers: `Authorization: Bearer <token>` (Admin only)

## Wishlist Routes

### Get Wishlist
```
GET /wishlist
```
Headers: `Authorization: Bearer <token>`

### Add to Wishlist
```
POST /wishlist/:productId
```
Headers: `Authorization: Bearer <token>`

### Remove from Wishlist
```
DELETE /wishlist/:productId
```
Headers: `Authorization: Bearer <token>`

### Clear Wishlist
```
DELETE /wishlist
```
Headers: `Authorization: Bearer <token>`

## Error Responses

All error responses follow this format:
```json
{
  "success": false,
  "message": "Error description"
}
```

Common HTTP Status Codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Seeding Data

To populate the database with sample data:

```bash
# Seed saree data
npm run seed:saree

# Destroy all data
npm run destroy
```

## Admin Credentials (After Seeding)

Email: `admin@wyna.com`
Password: `admin123`

## Environment Variables

Create a `.env` file in the backend directory:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wyna_ecommerce
JWT_SECRET=wyna_jwt_secret_key_2025_shrinaya_parampara
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:3000
```