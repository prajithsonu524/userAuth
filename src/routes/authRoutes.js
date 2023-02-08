const router = require('express').Router()
const authController = require('../controllers/authController')
const { validate, schemas, REQ_PARAMTERS } = require('../util/middleware/validator')
router.post('/user', validate(schemas.user, REQ_PARAMTERS.BODY), authController.createUser)
router.post('/login', validate(schemas.user, REQ_PARAMTERS.BODY), authController.login)
router.get('/validate', validate(schemas.validate, REQ_PARAMTERS.QUERY), authController.validateToken)
router.get('/refresh', validate(schemas.refresh, REQ_PARAMTERS.QUERY), authController.refreshToken)
module.exports = router
