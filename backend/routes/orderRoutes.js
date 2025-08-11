const express = require('express');
const router = express.Router();
const Order = require('../model/orderModel.js');

router.post('/order', async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'No order items provided' });
    }

    const newOrder = new Order({ items });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
