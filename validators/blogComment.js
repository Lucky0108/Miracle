const { check } = require('express-validator');

exports.validateBlogComment = [
    check("comment")
    .notEmpty()
    .isLength({min: 5, max:500})
    .withMessage("Please Enter Your Comment (5-500 Words)"),
    // check("website")
    // .isURL()
    // .withMessage("Please Enter A Valid URL"),
    check('name')
    .notEmpty()
    .isLength({min: 2, max:20})
    .withMessage("Please Enter Your Name"),
    // check('email')
    // .isEmail()
    // .withMessage("Please Enter A Valid Email Address")
]