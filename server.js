const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Route
app.use('/api/todos', require('./routes/api/todos'));

const PORT = process.env.PORT || 5090;

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
