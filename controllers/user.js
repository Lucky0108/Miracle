const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getUserById = (req,res,next,id) => {
    User.findById(id)
    .exec((err, user) => {
        if(err || !user) return res.status(400).json({ error: "No User Found!" })
        req.profile = user;
        next();
    })
}

exports.getUser = (req,res) => {
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile)
}

exports.updateUser = (req,res) => {
    if(req.body.password) {
        req.body.hash_password = bcrypt.hashSync(req.body.password, 10);
    }

    User.findByIdAndUpdate(
        {_id: req.profile._id},
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if(err) return res.status(400).json({ error: "Failed To Update The User!" })
            if(user) return res.status(200).json({ message: "User Updated Succesfully!", user })
        }
    )
}