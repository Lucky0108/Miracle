const express = require('express');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const { addBlog, getBlog, getAuthor, updatePost, deletePost } = require('../controllers/blog');
const passport = require("passport");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage });


router.post('/blog/add',  passport.authenticate("jwt", { session: false }), upload.array('blogPictures'), addBlog );
router.patch('/blog/update/:id', updatePost )
router.delete('/blog/delete/:id', deletePost)
router.get("/blog/:id", getBlog);
router.get("/author/:author", getAuthor);

module.exports = router;