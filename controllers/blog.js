// ToDo: At the end add new Id's to the database and expose that to client

const Blog = require('../models/blog');
const Category = require('../models/category');
const User = require('../models/user');
const slugify = require('slugify');
const formidable = require('formidable');
const blogImage = require('../models/blogImages');
const fs = require('fs');

exports.getBlogById = (req,res,next,id) => {
    Blog.findById(id)
        .populate("author", "firstName lastName socialLinks funFact")
        .populate("category", "name")
        .exec((err, blog) => {
            if(err || !blog) return res.status(400).json({ error: "No Blog Found!" })
            blog.createdAt = undefined;
            blog.updatedAt = undefined;
            req.blog = blog;
            next();
        })
};

exports.getImageById = (req,res,next,id) => {
    blogImage.findById(id)
        .exec((err, image) => {
            if(err || !image) return res.status(400).json({ error: "No Image Found!" })
            req.image = image;
            next();
        })
}

// Create
exports.createBlog = (req,res, next) => {
    const { title, content, tags } = req.body.blog;
    const random = () => { return Math.floor(Math.random()*1000); } // return a random number for slug to be unique even if title is same
    const blogBody = {
        title: title,
        slug: slugify(`${title}-${new Date().toLocaleDateString()}-${random()}`),
        content: content,
        tags: tags,
        author: req.profile._id,
        category: req.category._id
    }
    
    const _blog = new Blog(blogBody)
    _blog.save((err,blog) => {
        if(err) return res.status(400).json({ error: "Failed To Save Blog!", err: err });
        req.newBlog = {   // To Pass New Data to next middleware
            _id: blog._id,
            title: blog.title,
            content: blog.content,
            tags: blog.tags,
            category: blog.category
        }
        next();
    })
}

exports.createComment = (req,res) => {
    Blog.findByIdAndUpdate(
        { _id: req.blog._id },
        { $push: { comments: req.body.comment } },
        { new: true, useFindAndModify: false },
        (err, updatedBlog) => {
            if(err) return res.status(400).json({ error: "Failed To Post Comment!", err: err })
            return res.status(201).json({ message: "Comment Posted Successfully", updatedBlog })
        }
    )
}

exports.uploadImages = (req,res) => {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, file) => {
        if (err) return res.status(400).json({ error: "Something went wrong!", err: err })

        let _image = new blogImage(fields)
        // Handle File here
        if(file.image) {
            if(file.image.size > 2 * 1024 * 1024) {   // File Size Should not be more than 2 Mb
                return res.status(400).json({ error: "File size too big! (Should be less than 2 Mb)" })
            }
            _image.image.data = fs.readFileSync(file.image.path);
            _image.image.contentType = file.image.type;
        }

        //Save To The Database
        _image.save((err, image) => {
            if(err) return res.status(400).json({ error: "Failed To Upload Image!", err: err })
            return res.json({location: `http://localhost:4000/api/blog/image/${image._id}` });
        })
    })
}

// Read
exports.getBlog = (req,res) => {
    return res.status(200).json(req.blog)
}

exports.getBlogByUser = (req, res) => {
    Blog.find({ author: req.profile._id })
        .populate("author", "_id firstName")
        .exec((err, blogList) => {
            if (err) return res.status(400).json({ error: "No Blogs Found Of This User!" })
            return res.json(blogList)
        })
}

exports.getBlogByCategory = (req,res) => {
    Blog.find({ category: req.category._id })
        .populate("category", "_id name")
        .exec((err, blogList) => {
            if (err) return res.status(400).json({ error: "No Blogs Found In This Category!" })
            return res.json(blogList)
        })
}

exports.getAllBlogs = (req,res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id"

    Blog.find({})
        .populate("author", "firstName")
        .populate("category", "name")
        .sort([[sortBy, 'asc']])
        .limit(limit)
        .exec((err, blogs) => {
            if(err) return res.status(400).json({ error: "Something went wrong!", err: err })
            if(!blogs) return res.status(404).json({ error: "No Blog Found!" })
            return res.status(200).json(blogs)
        })
}

exports.getBlogImage = (req,res,next) => {
    if(req.image.image.data) {
        res.set("Content-Type", req.image.image.contentType);
        return res.send(req.image.image.data);
    }
    next();
}

// Update Blog
exports.updateBlog = (req,res, next) => {
    const blog = req.blog;
    const profileId = JSON.stringify(req.profile._id);     // To Stringify ObjectId To Compare them later
    const blogAuthorId = JSON.stringify(blog.author._id);

    if( profileId !== blogAuthorId ) {
        return res.status(400).json({ message: "You're not authorized to Update this blog!" })
    }

    const { title, content, tags, category } = req.body.blog;
    const random = () => { return Math.floor(Math.random()*1000); } // return a random number for slug to be unique even if title is same
    const blogBody = {
        title: title,
        slug: slugify(`${title}-${new Date().toLocaleDateString()}-${random()}`),
        content: content,
        tags: tags,
        category: category,
        date: new Date().toLocaleDateString()
    }

    Blog.findByIdAndUpdate(
        { _id: req.blog._id },
        { $set: blogBody },
        { new: true, useFindAndModify: false },
        (err, blog) => {
            if(err) return res.status(400).json({ message: "Failed To Update Blog!" })
            req.updateBlog = {   // To Pass New Data to next middleware
                _id: blog._id,
                title: blog.title,
                content: blog.content,
                tags: blog.tags,
                category: blog.category
            }
            next();
        }
    )
}

// Delete Blog
exports.removeBlog = (req,res,next) => {
    const blog = req.blog;
    const profileId = JSON.stringify(req.profile._id);
    const blogAuthorId = JSON.stringify(blog.author._id);
    if( profileId !== blogAuthorId ) {
        return res.status(400).json({ message: "You're not authorized to delete this blog!" })
    }

    blog.remove((err, deletedBlog) => {
        if(err) return res.status(400).json({ error: "Failed To Delete Blog!" });
        next();
    })
}

exports.removeImage = (req,res) => {
    const image = req.image;

    image.remove((err, deletedImage) => {
        if(err) return res.status(400).json({ error: "Failed To Delete Image!" });
        return res.json({ message: "Image Removed From Database!" })
    })
}

// Middlewares

// blogPictures : {
//     type: Array,
//     data: Buffer,
//     contentType: String,
//     default: []
// },

// User List Push
exports.pushBlogInUserBlogList = (req,res) => {
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $push: { blogs: req.newBlog } },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if(err) return res.status(400).json({ error: "Failed To Push Blog In User Blogs List!" })
            return res.status(201).json({ message: "Blog Succesfully Created / Updated!", blogList: user.blogs})
        }
    )
}

// User List Update
exports.updateUserBlogList = (req,res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: { blogs: req.updateBlog } },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if(err) return res.status(400).json({ error: "Failed To Update User Blog List!" })
            return res.status(200).json({ message:"Blog Updated Succesfully!", blogList: user.blogs })
        }
    )
}

// User List Pull
exports.removeBlogFromUserList = (req,res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $pull: { blogs: { _id: req.blog._id } } },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if(err) return res.status(400).json({ error: "Failed To Pull Blog From User Blogs List!" })
            return res.status(200).json({ message: "Blog Deleted Successfully!" })
        }
    )
}