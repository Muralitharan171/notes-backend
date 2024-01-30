const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { register, login, getUser } = require('../controllers/auth');

// Define routes for registration, login, and user details
router.post('/register', register);
router.post('/login', login);
router.get('/user', getUser);

module.exports = router;