const { check, validationResult } = require('express-validator');

exports.validateContact = [
    check('name')
    .notEmpty()
    .isLength({min: 2, max:20})
    .withMessage("Please Enter Your Name"),
    check('phone')
    .isMobilePhone("en-IN")
    .withMessage("Please Enter A Valid Indian Contact Number"),
    check('email')
    .isEmail()
    .withMessage("Please Enter A Valid Email Address"),
    check("service")
    .notEmpty()
    .withMessage("Please Select A service"),
    check("message")
    .notEmpty()
    .isLength({min: 40, max:250})
    .withMessage("Please Enter Your Message (40-250 Words)")
]