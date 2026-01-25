const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('Express server istvn tvj running ce ');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
