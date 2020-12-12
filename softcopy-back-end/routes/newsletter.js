const express = require('express');
const { isRequestValidated } = require('../validators/auth');
const { validateNewsletterEmail } = require('../validators/newsletter');
const router = express.Router();

router.post('/newsletter', validateNewsletterEmail, isRequestValidated )

module.exports = router;