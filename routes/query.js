const express = require('express');
const { validateQuery } = require('../validators/query');
const { isRequestValidated } = require('../validators/auth')
const { sendQueryMessage, getAllQueryMessages } = require('../controllers/query')
const router = express.Router();

router.post('/query', validateQuery, isRequestValidated, sendQueryMessage)
router.get('/getquery', getAllQueryMessages )

module.exports = router;
