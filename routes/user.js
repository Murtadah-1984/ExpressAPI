const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);

// Add more user-related routes as needed (update, delete, list, etc.).

module.exports = router;
