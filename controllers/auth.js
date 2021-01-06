const jwt = require('jsonwebtoken');
const User = require('../models/auth');
// Load Chance
const Chance = require('chance')

// Instantiate Chance so it can be used
const chance = new Chance();

exports.signup = (req,res) => {
    User.findOne({ email: req.body.email })
    .exec((err,user) => {
        if(err) { 
            return res.status(404).json({ error: err }) 
        }
        if(user) return res.status(400).json({ 
            message: "User Already Exist" 
        })

        const { firstName, lastName, email, password } = req.body
        // Using chance to create a random username
        const username = chance.string({ length: 10, alpha: true, numeric: true });

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            user_name: username.toUpperCase()
        })

        _user.save((error, data) => {
            if(error) { 
                return res.status(400).json({ 
                    message: "Something Went Wrong!", error: error 
                });
            }
            if(data){ 
                return res.status(201).json({ 
                    message: "User Created Successfully!", data: data 
                })
            }
        })
    });
}

exports.signin = (req,res) => {
    User.findOne({ email: req.body.email})
    .exec((err, user) => {
        if(user) {
            if(user.authenticate(req.body.password)) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d'})
                const { _id, firstName, lastName, user_name, email, fullName } = user
                res.cookie("token", token, { expiresIn: '1d' })
                res.status(200).json({
                    token: `Bearer ${token}`,
                    user: {
                        _id, firstName, lastName, email, user_name, fullName
                    },
                })
            } else {
                return res.status(400).json({ message: 'Incorrect Password' })
            }
        } else {
            return res.status(404).json({ message: "User Not Found!", error: err})
        }
    })
}

exports.signout = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Succesfully" })
}