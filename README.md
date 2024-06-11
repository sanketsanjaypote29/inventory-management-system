# Inventory Management System

## Overview

The Inventory Management System is a backend service for an e-commerce store implemented using Node.js and Express. This system provides APIs to manage product inventory, handle customer shopping carts, and apply discount coupons.

## Features

- **Add items to inventory:** Allows administrators to add new products or update the quantity of existing products in the inventory.
- **Remove items from inventory:** Allows administrators to remove products or decrease the quantity of products in the inventory.
- **Add items to shopping cart:** Allows customers to add products to their shopping carts, checking if the product is available in inventory.
- **Apply discount coupons:** Calculates the discounted price of the cart value based on discount coupons.
- **Retrieve inventory:** Provides a list of all products in the inventory.
- **Retrieve customer cart:** Provides the current state of a customer’s shopping cart.

**Directory Structure:**
```bash
inventory-management-system/
├── node_modules/
├── src/
│ ├── controllers/
│ │ └── inventoryController.js
│ ├── models/
│ │ ├── cart.js
│ │ ├── discount.js
│ │ └── inventory.js
│ ├── routes/
│ │ └── inventoryRoutes.js
│ └── app.js
├── package-lock.json
├── package.json
└── README.md
```


## Installation

1. **Clone the repository:**
   ``` bash
    git clone https://github.com/your-username/inventory-management-system.git
    cd inventory-management-system
    npm install
    node src/app.js ```


the product from the inventory. Returns an error if there are not enough items.

### Add Item to Cart

- **URL:** `/api/cart/add`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "customerId": "c1",
    "productId": "p1",
    "quantity": 10
  }
##Testing the API
Use tools like Postman or cURL to test the API endpoints.

##Example Requests
Add items to inventory


curl -X POST http://localhost:3000/api/inventory/add -H "Content-Type: application/json" -d '{"productId":"p1","quantity":100}'
Remove items from inventory


curl -X POST http://localhost:3000/api/inventory/remove -H "Content-Type: application/json" -d '{"productId":"p1","quantity":50}'
Add items to cart

curl -X POST http://localhost:3000/api/cart/add -H "Content-Type: application/json" -d '{"customerId":"c1","productId":"p1","quantity":10}'
Apply discount coupon


curl -X POST http://localhost:3000/api/cart/discount -H "Content-Type: application/json" -d '{"cartValue":1000,"discountId":"DISCOUNT20"}'
Get inventory


curl -X GET http://localhost:3000/api/inventory
Get customer cart

curl -X GET http://localhost:3000/api/cart/c1

##Edge Cases Covered
##Inventory Management: Ensures that items cannot be removed if the quantity is insufficient.
##Cart Management: Ensures that items cannot be added to the cart if there are not enough items in the inventory.
##Discount Application: Ensures that the discount does not exceed the maximum discount cap specified.
##Future Enhancements
Implement authentication and authorization for inventory management endpoints.
Add a database to persist data.
Implement more complex discount rules and additional discount types.
Add support for multiple currencies and internationalization.