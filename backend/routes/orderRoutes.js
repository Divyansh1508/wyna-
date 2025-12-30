const express = require('express');
const { body, validationResult } = require('express-validator');
const Order = require('../models/Order');

const router = express.Router();

// POST /api/orders - Create new order
router.post('/', [
  body('customerInfo.name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('customerInfo.email').isEmail().withMessage('Valid email is required'),
  body('customerInfo.phone').isMobilePhone().withMessage('Valid phone number is required'),
  body('items').isArray({ min: 1 }).withMessage('Order must contain at least one item'),
  body('totalAmount').isNumeric().withMessage('Total amount must be a number')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { customerInfo, items, totalAmount, paymentMethod = 'cod', notes = '' } = req.body;

    const order = new Order({
      customerInfo,
      items,
      totalAmount,
      paymentMethod,
      notes
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: 'Order created successfully',
      orderId: savedOrder._id,
      orderNumber: savedOrder.orderNumber
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
});

// GET /api/orders/:id - Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.product')
      .exec();

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/orders - Get all orders (admin only)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = status ? { status } : {};

    const orders = await Order.find(query)
      .populate('items.product', 'name price')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Order.countDocuments(query);

    res.json({
      orders,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
