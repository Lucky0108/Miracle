const Blog = require('../models/blog');
const shortid = require('shortid');
const slugify = require('slugify');

exports.addBlog = (req, res) => {

    const { title, author, tags, blog } = req.body;
    let blogPictures = [];

    if(req.files.length > 0) {
        blogPictures = req.files.map(file => {
            return { img: file.filename }
        });
    }
    const _blog = new Blog({
        title: title,
        author,
        tags,
        blog,
        blogPictures,
        slug: slugify(title),
    });

    _blog.save((err, blog) => {
        if(err) {
            console.log(err)
            return res.status(400).json({ message: "Failed To Save New Post!", error: err })
        }
        if(blog) return res.status(201).json({ message: "New Blog Post Saved Successfully!"})
    })
}

exports.updatePost = (req,res) => {
    const author = req.auth.email;
    const { title, body } = req.body;
    Blog.findOneAndUpdate(
        { author, _id: req.params.id },
        { $set:{ title, body, slug } },
        { new: true }
    )
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json({ message: "Error Updating Your Blog Post" }) )
}

exports.deletePost = (req,res) => {
    const author = req.user.email;
    Blog.findOneAndDelete({ author, _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json({message: "Failed To Delete This Post", error: err}))
}

exports.getBlog = (req, res) => {
    Blog.find({ _id: req.params.id })
       .then(post => res.status(200).json(post))
       .catch(err => res.status(400).json({ message: "Error fetching post by id", error: err }));
}

exports.getAuthor = (req, res) => {
    Blog.find({ author: req.params.author })
       .then(posts => res.status(200).json(posts))
       .catch(err =>
          res
             .status(400)
             .json({ message: "Error fetching posts of specific author", error: err })
       );
  }