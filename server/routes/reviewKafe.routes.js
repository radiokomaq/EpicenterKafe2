const Router = require('express')
const router = new Router()
const ReviewController = require('../controller/reviewKafe.controller')


router.post('/reviewCreate', ReviewController.createReview)
router.get('/getReview', ReviewController.getReview)



module.exports = router