// This file contains the cart model, which is responsible for managing the cart state and operations. The cart model is used by the inventory controller to add items to the cart and retrieve the cart contents for a specific customer. The cart model uses an in-memory object to store the cart data and provides functions to add items to the cart and retrieve the cart contents.

const carts = {};

// Add an item to the cart
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

// Get the cart contents for a customer
const getCart = (customerId) => carts[customerId] ||  {};

// Export the functions
module.exports = {
  addItemToCart,
  getCart
};
