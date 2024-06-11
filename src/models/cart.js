// src/models/cart.js

const carts = {};

const addItemToCart = (customerId, productId, quantity, inventory) => {
  if (!inventory[productId] || inventory[productId] < quantity) {
    return false; // Not enough items in inventory
  }

  if (!carts[customerId]) {
    carts[customerId] = {};
  }

  if (!carts[customerId][productId]) {
    carts[customerId][productId] = 0;
  }

  carts[customerId][productId] += quantity;
  inventory[productId] -= quantity;
  return true;
};

const getCart = (customerId) => carts[customerId] ||  {};

module.exports = {
  addItemToCart,
  getCart
};
