const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { errorHandler } = require('./middlewares/errorHandler');
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://murran171:Muralitharan171@cluster0.t7ewgl7.mongodb.net/?retryWrites=true&w=majority/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  w: 'majority',
});

const authRoutes = require('./routes/auth'); // Adjust the path accordingly
app.use('/api/auth', authRoutes); // Adjust the route path accordingly

// Import models
const User = require('./models/user');
const Note = require('./models/note');


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log("its started");
});


