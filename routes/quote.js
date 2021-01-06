const express = require('express');
const { sendQuoteMessage } = require('../controllers/quote');
const { isRequestValidated } = require('../validators/auth')
const { validateQuote } = require('../validators/quote');
const router = express.Router();

router.post('/quote', validateQuote, isRequestValidated, sendQuoteMessage)

module.exports = router;
