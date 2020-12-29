const BlogComment = require("../models/blogComment");

exports.blogComment = (req,res) => {
    const _newComment = new BlogComment(req.body);

    _newComment.save((err, data) => {
        if(err) return res.status(400).json({ message: "Something Went Wrong! Try Again Later!", error: err })
        if(data) {
            return res.status(201).json({ message:"Comment Posted Succesfully!", data: data })
        }
    })
}

exports.getComments = (req,res) => {
    BlogComment.find({})
    .exec((err,data) => {
        if(err) return res.status(404).json({ error: err });
        if(data) {
            return res.status(200).json({ message: `${data.length} Comments`, data: data})
        }
    })
}