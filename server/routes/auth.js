const express = require('express')

const router = express.Router();


const userRegister = require("../validators/auth")

const runValidation = require('../validators/validationResult')

 



const register = require('../controllers/auth')

router.post('/register', userRegister.userRegisterValidator ,runValidation, register.registerController)

router.post('/register/activate', register.registerActivate)

router.post('/login', userRegister.userLoginValidator, runValidation, register.registerLogin)

module.exports = router;