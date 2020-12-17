const Query = require('../models/query')

exports.sendQueryMessage = (req,res) => {
    const _newQuery = new Query(req.body)

    _newQuery.save((err,data) => {
        if(err) return res.status(400).json({ message: "Something Went Wrong! Try Again Later!", error: err })
        if(data) {
            return res.status(201).json({ message:"Your Request Is Succesfully Registered!", data: data })
        } 
    })
}

exports.getAllQueryMessages = (req,res) => {
    Query.find({})
    .exec((err,result) => {
        if(err) return res.status(400).json({ message: err })
        if(result) {
            return res.status(200).json({ data: result })
        }
    })
}