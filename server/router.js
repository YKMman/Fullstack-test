const { Router } = require('express')
const controller = require('./controller')


const router = Router()


router.get('/', controller.helloWorld)
router.post("/api/products", controller.products)
router.post("/api/create", controller.createProducts)
router.post("/api/search", controller.search)
router.post("/api/sort", controller.sort)



module.exports = router