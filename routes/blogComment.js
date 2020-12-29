const express = require("express");
const { blogComment, getComments } = require("../controllers/blogComment");
const { isRequestValidated } = require("../validators/auth");
const { validateBlogComment } = require("../validators/blogComment");
const router = express.Router();

router.post('/sendcomment', validateBlogComment, isRequestValidated, blogComment );
router.get('/getcomments', getComments )

module.exports = router;