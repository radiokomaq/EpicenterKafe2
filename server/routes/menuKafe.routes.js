const Router = require('express')
const router = new Router()
const menuKafeController = require('../controller/menuKafe.controller')

router.post('/hookah', menuKafeController.createMenuHookah)
router.post('/snacks', menuKafeController.createMenuSnacks)
router.post('/koffee', menuKafeController.createMenuKoffe)
router.post('/dessert', menuKafeController.createMenuDessert)
router.get('/getsnacks', menuKafeController.getSnacks)
router.get('/getMenuKafe', menuKafeController.getMenuKafe)

router.post('/photos', menuKafeController.createMenuPhotos)


router.delete('/delkof/:id', menuKafeController.deleteKoffe)


module.exports = router