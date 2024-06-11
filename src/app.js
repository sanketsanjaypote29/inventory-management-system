// src/app.js

const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventoryRoutes');

app.use(express.json());
app.use('/api', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
