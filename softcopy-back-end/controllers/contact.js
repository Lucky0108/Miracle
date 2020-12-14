const Contact = require('../models/contact')

exports.sendContactMessage = (req,res) => {
    const _newContact = new Contact(req.body)

    _newContact.save((err,data) => {
        if(err) return res.status(400).json({ message: "Something Went Wrong! Try Again Later!", error: err })
        if(data) {
            return res.status(201).json({ message:"Your Request Is Succesfully Registered!", data: data })
        } 
    })
}

exports.getAllContactMessages = (req,res) => {
    Contact.find({})
    .exec((err,result) => {
        if(err) return res.status(400).json({ message: err })
        if(result) {
            return res.status(200).json({ data: result })
        }
    })
}