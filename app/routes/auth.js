var express = require('express')

var router = express.Router();
var AuthController = require('../api/auth/controller')
var  { checkApiKey, checkJwt }  = require('../middleware')
const { validateLogin } = require('../api/auth/validation')


/* GET Home page */
router.post('/login', validateLogin, AuthController.login )
// router.post('/logout', [ checkApiKey, checkJwt ], AuthController.logout )
// router.post('/register', checkApiKey, AuthController.register  )
// router.post('/forgot_password', checkApiKey, AuthController.forgotPassword  )
// router.post('/verify_account', checkApiKey, AuthController.verifyAccount  )

module.exports = router;