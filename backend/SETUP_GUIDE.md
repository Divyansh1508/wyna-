# WYNA Backend Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

## Installation Steps

### 1. Navigate to Backend Directory
```bash
cd wyna-/backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
Create a `.env` file in the backend directory with the following content:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wyna_ecommerce
JWT_SECRET=wyna_jwt_secret_key_2025_shrinaya_parampara
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:3000
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For Windows
net start MongoDB

# For Mac/Linux
sudo systemctl start mongod
```

### 5. Seed Database (Optional)
Populate the database with sample data:
```bash
npm run seed:saree
```

### 6. Start Development Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed:saree` - Seed database with sample saree data
- `npm run destroy` - Clear all data from database

## API Endpoints

Once the server is running, you can access:

- **API Base URL**: `http://localhost:5000/api`
- **Health Check**: `http://localhost:5000/api/health`

## Testing the API

### Using cURL

Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "phone": "9876543210"
  }'
```

Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Get products:
```bash
curl http://localhost:5000/api/products
```

### Using Postman

Import the following collection for easy testing:

1. Open Postman
2. Click "Import"
3. Select the `WYNA_API.postman_collection.json` file (if available)
4. Set environment variables:
   - `BASE_URL`: http://localhost:5000/api
   - `TOKEN`: Your JWT token after login

## Database Structure

The backend uses MongoDB with the following collections:

- **users**: Customer and admin accounts
- **products**: Saree products with detailed specifications
- **categories**: Product categories
- **orders**: Customer orders
- **newsletter**: Newsletter subscribers
- **contacts**: Contact form submissions

## Admin Panel Access

After seeding the database, you can access admin features using:

**Email**: `admin@wyna.com`
**Password**: `admin123`

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check MongoDB URI in `.env` file
   - Verify MongoDB service status

2. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill process using the port:
     ```bash
     # Windows
     netstat -ano | findstr :5000
     taskkill /PID <PID> /F
     
     # Mac/Linux
     lsof -i :5000
     kill -9 <PID>
     ```

3. **JWT Token Issues**
   - Check JWT_SECRET in `.env`
   - Ensure token is sent in Authorization header
   - Verify token expiration

4. **Seeding Errors**
   - Ensure MongoDB is connected
   - Clear existing data first: `npm run destroy`
   - Run seeder again: `npm run seed:saree`

### Logging

The application logs important events to the console:
- Database connection status
- Server startup
- API request handling
- Error messages

## Security Features

- **JWT Authentication**: Secure user sessions
- **Password Hashing**: bcrypt encryption for passwords
- **Input Validation**: express-validator for request validation
- **Rate Limiting**: Prevent abuse (can be added)
- **CORS**: Controlled cross-origin requests

## Deployment

### Production Environment Variables

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wyna_ecommerce
JWT_SECRET=your_production_secret_key
JWT_EXPIRE=30d
CLIENT_URL=https://yourdomain.com
```

### Hosting Options

1. **Heroku**
2. **DigitalOcean App Platform**
3. **AWS Elastic Beanstalk**
4. **Google Cloud Run**
5. **Vercel** (with serverless functions)

## API Documentation

Detailed API documentation is available in `API_DOCUMENTATION.md`

## Support

For issues and questions:
- Check the API documentation
- Review error logs
- Ensure all prerequisites are met
- Verify environment configuration