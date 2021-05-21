const express = require('express');
const { check, body } = require('express-validator');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById, getUser, updateUser, getUserProfilePicture, updateUserName, updateEmail, getUserBlogList } = require('../controllers/user');
const { isRequestValidated } = require('../validators/auth');
const router = express.Router();

// Param
router.param("userId", getUserById);

// Actual Routes

// Read
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/user/profile/:userId", getUserProfilePicture)
router.get('/user/blogs/:userId', isSignedIn, isAuthenticated, getUserBlogList);

// Update
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.put("/user/username/:userId", isSignedIn, isAuthenticated, [check('user_name',"Username should have at least 5 characters!").isLength({min: 5})], isRequestValidated ,updateUserName);
router.put("/user/email/:userId", isSignedIn, isAuthenticated, [check('email',"Please Enter A Valid Email address").isEmail()], isRequestValidated ,updateEmail);


module.exports = router;