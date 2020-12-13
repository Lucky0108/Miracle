const express = require('express');
const { validateContact } = require('../validators/contact');
const { isRequestValidated } = require('../validators/auth')
const { sendContactMessage, getAllContactMessages } = require('../controllers/contact')
const router = express.Router();

router.post('/contact', validateContact, isRequestValidated, sendContactMessage)
router.get('/getContact', getAllContactMessages )

module.exports = router;
