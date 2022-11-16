const express = require('express')
const {getService, getAllService, signupService} = require('../controllers/serviceController')  // controller fns

const serviceRouter = express.Router()

serviceRouter
    .route('/all-service')
    .get(getAllService)
    // .post(postService)
    // .patch(updateService)
    // .delete(deleteService)

serviceRouter
    .route('/')
    .get(getService)

serviceRouter
    .route('/signup')
    .post(signupService)

module.exports = serviceRouter