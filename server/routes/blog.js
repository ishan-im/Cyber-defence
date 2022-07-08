const express = require('express')

const router = express.Router();

// controllers


const register = require('../controllers/auth');
const blog = require('../controllers/blog');


// validators

const blogValidator = require("../validators/blog")

const runValidation = require('../validators/validationResult')


//routes

router.post('/blog', register.requireSignIn, register.adminMiddleware,  blogValidator.createBlogValidator, blog.createBlog)

router.get('/blogs', blog.blogList)

router.post('/blog/:slug', blog.readBlog)

router.put('/blog/:slug', register.requireSignIn, register.adminMiddleware,runValidation, blogValidator.createBlogValidator, blog.createBlog)

router.delete('/blog/:slug',   register.requireSignIn, register.adminMiddleware, blog.remove)

module.exports = router