// src/routes/inventoryRoutes.js

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

router.post('/inventory/add', addItem);
router.post('/inventory/remove', removeItem);
router.post('/cart/add', addToCart);
router.post('/cart/discount', applyDiscount);
router.get('/inventory', getInventoryItems);
router.get('/cart/:customerId', getCustomerCart);

module.exports = router;
