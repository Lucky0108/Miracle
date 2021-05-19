const express = require('express');
const { signup, signin, signout, isSignedIn } = require('../controllers/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, signup)
router.post('/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/signout', signout)

router.post('/test', isSignedIn, (req,res) => {
    return res.send(req.auth)
})
module.exports = router;