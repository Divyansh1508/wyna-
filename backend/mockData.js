// Mock data for development when database is unavailable
const MOCK_PRODUCTS = [
  {
    _id: "1",
    name: "Premium Banarasi Silk Saree",
    price: 15000,
    finalPrice: 12000,
    category: { name: "Banarasi Silk" },
    images: [{ url: "/Asset/product/placeholder.jpg" }],
    shortDescription: "Luxurious handwoven Banarasi silk saree with golden zari work",
    featured: true,
    hasDiscount: true,
    discountPercentage: 20
  },
  {
    _id: "2",
    name: "Traditional Kanjivaram Silk",
    price: 18000,
    finalPrice: 18000,
    category: { name: "Kanjivaram Silk" },
    images: [{ url: "/Asset/product/placeholder.jpg" }],
    shortDescription: "Authentic Kanjivaram silk with intricate temple border design",
    featured: true,
    hasDiscount: false
  },
  {
    _id: "3",
    name: "Designer Bridal Collection",
    price: 25000,
    finalPrice: 20000,
    category: { name: "Bridal Collection" },
    images: [{ url: "/Asset/product/placeholder.jpg" }],
    shortDescription: "Exclusive bridal saree with heavy embroidery and stone work",
    featured: true,
    hasDiscount: true,
    discountPercentage: 20
  }
];

const MOCK_CATEGORIES = [
  {
    _id: "1",
    name: "Banarasi Silk",
    description: "Traditional Banarasi silk sarees with rich brocade work",
    image: "/Asset/product/placeholder.jpg",
    featured: true
  },
  {
    _id: "2",
    name: "Kanjivaram Silk",
    description: "South Indian Kanjivaram silk with temple borders",
    image: "/Asset/product/placeholder.jpg",
    featured: true
  },
  {
    _id: "3",
    name: "Bridal Collection",
    description: "Exclusive designer bridal sarees for special occasions",
    image: "/Asset/product/placeholder.jpg",
    featured: true
  }
];

// Mock API endpoints
const mockEndpoints = {
  '/api/products/featured/home': { 
    success: true, 
    data: MOCK_PRODUCTS 
  },
  '/api/categories/featured': { 
    success: true, 
    data: MOCK_CATEGORIES 
  },
  '/api/products': { 
    success: true, 
    data: MOCK_PRODUCTS 
  }
};

// Export for use in development
module.exports = {
  MOCK_PRODUCTS,
  MOCK_CATEGORIES,
  mockEndpoints
};