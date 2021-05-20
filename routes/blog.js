const express = require('express');
const router = express.Router();
const { getCategoryById } = require('../controllers/category')
const { getUserById } = require('../controllers/user')
const { getBlogById } = require('../controllers/blog')

// Params
// router.param("blogId", getBlogById)
router.param("categoryId", getCategoryById);
router.param("userId", getUserById);

module.exports = router;