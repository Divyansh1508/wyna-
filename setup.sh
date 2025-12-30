#!/bin/bash

# Setup script for Hamp8 E-commerce Application

echo "Setting up Hamp8 E-commerce Application..."

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../frontend
npm install

# Go back to root
cd ..

# Setup environment files
echo "Setting up environment files..."
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "Backend .env file created. Please update with your MongoDB URI and JWT secret."
fi

if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env 2>/dev/null || echo "Frontend .env already exists"
fi

# Create uploads directories
echo "Creating uploads directories..."
mkdir -p backend/uploads/images/products
mkdir -p backend/uploads/images/categories
mkdir -p backend/uploads/images

# Seed the database
echo "Seeding database..."
cd backend
npm run seed

echo "Setup complete!"
echo ""
echo "To start the application:"
echo "1. Update backend/.env with your MongoDB URI and JWT secret"
echo "2. Run 'npm run dev' from the root directory"
echo ""
echo "Frontend will be available at: http://localhost:3000"
echo "Backend API will be available at: http://localhost:5000"
echo ""
echo "Note: Make sure MongoDB is running on your system"
