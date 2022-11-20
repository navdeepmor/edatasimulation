const Service = require('../models/serviceModel')

// create service with given details
async function addService(req, res) {
    const newService = new Service(req.body)
    try {
        await newService.save()
        res.status(201).json(newService)
    } catch(err) {
        res.status(409).json({
            'msg': err.message
        }) 
    }
}
// fetchs the given service details from DB
async function getService(req, res) {
    try {
        let serviceInfo = await Service.findOne({"name" : req.query.service})
        res.status(200).json(serviceInfo)
    } catch(err) {
        res.status(404).json({
            'msg': err.message
        })
    } 
}
// fetchs all service details from DB
async function getAllService(req, res) {
    try {
        let allServiceInfo = await Service.find();
        res.status(200).json(allServiceInfo)
    } catch(err) {
        res.status(404).json({
            'msg': err.message
        })  
    }
}

module.exports = {addService, getService, getAllService}