// src/controllers/inventoryController.js

const { addItemToInventory, removeItemFromInventory, getInventory } = require('../models/inventory');
const { addItemToCart, getCart } = require('../models/cart');
const { applyDiscountCoupon } = require('../models/discount');

const addItem = (req, res) => {
  const { productId, quantity } = req.body;
  addItemToInventory(productId, quantity);
  res.send(`Added ${quantity} of product ${productId} to inventory`);
};

const removeItem = (req, res) => {
  const { productId, quantity } = req.body;
  const success = removeItemFromInventory(productId, quantity);
  if (success) {
    res.send(`Removed ${quantity} of product ${productId} from inventory`);
  } else {
    res.status(400).send('Not enough items in inventory');
  }
};

const addToCart = (req, res) => {
  const { customerId, productId, quantity } = req.body;
  const inventory = getInventory();
  const success = addItemToCart(customerId, productId, quantity, inventory);
  if (success) {
    res.send(`Added ${quantity} of product ${productId} to customer ${customerId}'s cart`);
  } else {
    res.status(400).send('Not enough items in inventory');
  }
};

const applyDiscount = (req, res) => {
  const { cartValue, discountId } = req.body;
  const discountedPrice = applyDiscountCoupon(cartValue, discountId);
  res.send(`Discounted price is ${discountedPrice}`);
};

const getInventoryItems = (req, res) => {
  res.json(getInventory());
};

const getCustomerCart = (req, res) => {
  const { customerId } = req.params;
  res.json(getCart(customerId));
};

module.exports = {
  addItem,
  removeItem,
  addToCart,
  applyDiscount,
  getInventoryItems,
  getCustomerCart
};
