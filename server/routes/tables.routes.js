const Router = require('express')
const router = new Router()
const tablesController = require('../controller/tables.controller')

router.post('/tables', tablesController.createTables)
router.get('/tables', tablesController.getTables)
router.delete('/tables/:id', tablesController.deleteTables)



module.exports = router