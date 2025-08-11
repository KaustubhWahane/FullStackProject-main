const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [
    {
      idMeal: String,
      strMeal: String,
      quantity: { type: Number, default: 1 },
      price: Number, 
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
