const express = require('express')

const router = express.Router();

// controllers


const register = require('../controllers/auth');
const content = require('../controllers/content');


// validators

const blogValidator = require("../validators/blog")

const runValidation = require('../validators/validationResult')


//routes

router.post('/content', register.requireSignIn, register.adminMiddleware,  blogValidator.createBlogValidator, content.createModule)

router.get('/contents', content.moduleList)

router.post('/content/:slug', content.readModule)

router.put('/content/:slug', register.requireSignIn, register.adminMiddleware,runValidation, blogValidator.createBlogValidator, content.createModule)

router.delete('/content/:slug',   register.requireSignIn, register.adminMiddleware, content.remove)

module.exports = router