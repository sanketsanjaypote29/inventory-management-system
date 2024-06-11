// src/models/inventory.js

const inventory = {};

const addItemToInventory = (productId, quantity) => {
  if (!inventory[productId]) {
    inventory[productId] = 0;
  }
  inventory[productId] += quantity;
};

const removeItemFromInventory = (productId, quantity) => {
  if (!inventory[productId] || inventory[productId] < quantity) {
    return false; // Not enough items in inventory
  }
  inventory[productId] -= quantity;
  return true;
};

const getInventory = () => inventory;

module.exports = {
  addItemToInventory,
  removeItemFromInventory,
  getInventory
};
