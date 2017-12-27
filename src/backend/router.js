"use strict"

var express = require('express')
var router = express.Router()

var controller = require('./controller')

router.get(
	'/userDetails', 
	controller.userDetails
)

router.get(
	'/getAuthUser', 
	controller.getAuthUser
)

router.put(
	'/updateUserDetails', 
	controller.updateUserDetails
)

router.post(
	'/signup', 
	controller.signup
)

router.post(
	'/login', 
	controller.login
)

router.post(
	'/socialLogin', 
	controller.socialLogin
)

// router.delete(
// 	'/:id', 
// 	controller.remove
// )

module.exports = router;