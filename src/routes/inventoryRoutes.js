// Desc: Inventory routes for adding, removing, and getting inventory items and customer carts in an e-commerce application.

const express = require('express');
const router = express.Router();
const {
  addItem,
  removeItem,
  addToCart,
  applyDiscount,
  getInventoryItems,
  getCustomerCart
} = require('../controllers/inventoryController');

// Define routes
router.post('/inventory/add', addItem);
router.post('/inventory/remove', removeItem);
router.post('/cart/add', addToCart);
router.post('/cart/discount', applyDiscount);
router.get('/inventory', getInventoryItems);
router.get('/cart/:customerId', getCustomerCart);

// Export the router
module.exports = router;
