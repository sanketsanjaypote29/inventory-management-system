

const inventory = {};

// Add items to inventory
const addItemToInventory = (productId, quantity) => {
  if (!inventory[productId]) {
    inventory[productId] = 0;
  }
  inventory[productId] += quantity;
};

// Remove items from inventory
const removeItemFromInventory = (productId, quantity) => {
  if (!inventory[productId] || inventory[productId] < quantity) {
    return false; // Not enough items in inventory
  }
  inventory[productId] -= quantity;
  return true;
};

// Get the current inventory
const getInventory = () => inventory;

// Export the functions
module.exports = {
  addItemToInventory,
  removeItemFromInventory,
  getInventory
};
