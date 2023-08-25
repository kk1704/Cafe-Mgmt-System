const express = require('express')
const router = express.Router()
const { createUser, login, forgetPassword } = require('../controllers/controller')

router.post('/signup', createUser)

router.post('/login', login)

router.post('/forgetPassword', forgetPassword)

module.exports = router