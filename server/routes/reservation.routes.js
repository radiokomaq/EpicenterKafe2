const Router = require('express')
const router = new Router()
const reservationController = require('../controller/reservation.controller')

router.post('/reservation', reservationController.createReservation)
router.post('/reservation/free', reservationController.searchFreeTablse)

module.exports = router