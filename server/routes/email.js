const express = require('express')
const {sendEmail} = require('../controllers/emailController')  // controller fns

const emailRouter = express.Router()

emailRouter
    .route('/')
    .post(sendEmail)
    // .get(sendEmail)
    // .patch(updateService)
    // .delete(deleteService)

module.exports = emailRouter