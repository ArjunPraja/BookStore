const express = require('express');
const registerUser = require('../controller/registerUser');
const loginUser = require('../controller/loginUser');
const userDetails = require('../controller/GetUserInfo');
const verifyToken = require('../middleware/auth');
const logoutUser = require('../controller/logout');
const getAllUsers = require('../controller/GetAllUser');
const router = express.Router();

// Create User API
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/logout', logoutUser);
router.get('/getusers', getAllUsers);
router.get('/userinfo', verifyToken, userDetails); // Protected route

module.exports = router;
