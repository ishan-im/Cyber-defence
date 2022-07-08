const express = require('express')

const router = express.Router();


//middlewares

const register = require('../controllers/auth')


//controllers

const user  = require('../controllers/user')


//routes


router.get('/user', register.requireSignIn, register.authMiddleware, user.read)

router.get('/admin', register.requireSignIn, register.adminMiddleware, user.read)










module.exports = router;