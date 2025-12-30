const Product = require('../models/Product');
const Category = require('../models/Category');
const mongoose = require('mongoose');

const categories = [
  {
    name: 'Corporate Gifting',
    description: 'Premium corporate gifts for clients, employees, and business partners',
    image: '/images/categories/corporate-gifting.jpg'
  },
  {
    name: 'Gift Hampers',
    description: 'Thoughtfully curated gift hampers for various occasions',
    image: '/images/categories/gift-hampers.jpg'
  },
  {
    name: 'Wedding Boxes / Customized Boxes',
    description: 'Custom wedding boxes and personalized gift packaging',
    image: '/images/categories/wedding-boxes.jpg'
  },
  {
    name: 'Diwali Gifts',
    description: 'Traditional and modern Diwali gift collections',
    image: '/images/categories/diwali-gifts.jpg'
  },
  {
    name: 'New Year / Christmas Gifts',
    description: 'Festive gifts for New Year and Christmas celebrations',
    image: '/images/categories/christmas-gifts.jpg'
  },
  {
    name: 'Antique Gifts',
    description: 'Vintage and antique-inspired gift items',
    image: '/images/categories/antique-gifts.jpg'
  }
];

const products = [
  {
    name: 'Corporate Gift Hamper (H-102)',
    description: 'Premium Corporate Gift Hamper – Customizable with Your Logo. Create a lasting impression with this thoughtfully designed corporate hamper that blends elegance with everyday utility. This premium set includes: A sleek notebook for capturing ideas and daily notes, A metallic pen that adds sophistication to every signature, A stylish card holder to keep business contacts organized, A durable keychain for everyday use. Presented in a modern, professional box, this hamper is more than just a gift – it is a gesture of appreciation and trust.',
    price: 2500,
    category: 'Corporate Gifting',
    stock: 50,
    features: [
      'Custom branding with your company logo',
      'High-quality materials designed to impress',
      'Ideal for clients, employees, partners, festive gifting, and corporate events'
    ],
    customizable: true,
    images: [
      { url: '/images/products/h-102-1.jpg', alt: 'Corporate Gift Hamper H-102' },
      { url: '/images/products/h-102-2.jpg', alt: 'Corporate Gift Hamper H-102 - Contents' }
    ]
  },
  {
    name: 'Digital Standee (H-101)',
    description: 'First impressions matter – and that\'s exactly what this sleek digital display stand is designed for. Whether you\'re welcoming guests at an event, showcasing your brand in a luxury showroom, or creating that Instagram-worthy corner in your store, this premium stand does it all with elegance. Crafted with a minimal yet modern frame, it features a bright digital screen that makes your logo, promotions, or brand message pop. The clean design ensures that your brand stays the hero, while the sturdy build guarantees reliability at high-footfall venues.',
    price: 15000,
    category: 'Corporate Gifting',
    stock: 10,
    features: [
      'Stand-out Branding – Catch attention instantly with vibrant digital visuals',
      'Luxury Finish – Designed to complement premium interiors and upscale events',
      'Versatile Use – Perfect for exhibitions, events, receptions, retail showrooms, and award functions',
      'Plug & Play – Easy setup so you can focus on engaging your audience'
    ],
    customizable: true,
    images: [
      { url: '/images/products/h-101-1.jpg', alt: 'Digital Standee H-101' },
      { url: '/images/products/h-101-2.jpg', alt: 'Digital Standee H-101 - Side View' }
    ]
  }
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});

    console.log('Cleared existing data');

    // Create categories
    const createdCategories = await Category.insertMany(categories);
    console.log('Categories seeded successfully');

    // Create products with category references
    const productsWithCategories = products.map(product => ({
      ...product,
      category: createdCategories.find(cat => cat.name === product.category)._id
    }));

    await Product.insertMany(productsWithCategories);
    console.log('Products seeded successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  });
};

// Run if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
