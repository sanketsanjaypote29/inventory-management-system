// Code to start the server and listen on a port for incoming requests from the client side.
const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventoryRoutes');

// Middleware
app.use(express.json());
app.use('/api', inventoryRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
