const express = require('express')
const { addService, getService, getAllService } = require('../controllers/serviceController')  // controller fns

const serviceRouter = express.Router()

serviceRouter
    .route('/')
    .get(getAllService)
    // .post(postService)
    // .patch(updateService)
    // .delete(deleteService)

serviceRouter
    .route('/')
    .post(addService)

serviceRouter
    .route('/find-service')
    .get(getService)

module.exports = serviceRouter