const express = require('express');
const { check, body } = require('express-validator');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById, getUser, updateUser } = require('../controllers/user');
const { isRequestValidated } = require('../validators/auth');
const router = express.Router();

// Param
router.param("userId", getUserById);

// Actual Routes
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, [
    check("firstName","Name should be atleast 3 characters").isLength({ min:3 }),
    check("email","Please enter a valid email address").if(body('email').exists()).isEmail(),
    check("contact","Contact should be a valid number").if(body('contact').exists()).isMobilePhone(),
    check("password", "Password should be atleast 6 Characters").if(body('password').exists()).isLength({ min:6 }),
], isRequestValidated, updateUser)

module.exports = router;