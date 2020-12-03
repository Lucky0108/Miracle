const jwt = require('jsonwebtoken');
const User = require('../models/auth');
// Load Chance
const Chance = require('chance')

// Instantiate Chance so it can be used
const chance = new Chance();

exports.signup = (req,res) => {
    User.findOne({ email: req.body.email })
    .exec((err,user) => {
        if(err) return res.status(404).json({ error: err })
        if(user) return res.status(400).json({ message: "User Already Exist" })

        const { firstName, lastName, email, password } = req.body
        // Using chance to create a random username
        const username = chance.string({ length: 8, alpha: true, numeric: true });

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            userName: username.toUpperCase()
        })

        _user.save((err, data) => {
            if(err) return res.status(400).json({ message: "Something Went Wrong!", error: err })
            if(data) return res.status(201).json({ message: "User Created Successfully!" })
        })
    })
}

exports.signin = (req,res) => {
    User.findOne({ email: req.body.email})
    .exec((err, user) => {
        if(err) return res.status(404).json({ message: "User Not Found!" })
        if(user) {
            if(user.authenticate(req.body.password)) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d'})
                const { _id, firstName, lastName, userName, email } = user

                return res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, userName
                    },
                })
            } else {
                return res.status(400).json({ message: 'Incorrect Password' })
            }
        } else {
            return res.status(400).json({ message: "Something went wrong", error: err})
        }
    })
}