const Service = require('../models/serviceModel')

// fetchs all service details from DB
async function getAllService(req, res) {
    let allServiceInfo = await Service.find();
    if(allServiceInfo) {
        res.json(allServiceInfo)
    } else {
        res.json({
            'msg': `SERVICES INFO DON'T EXIST INSIDE DB` 
        })
    }
}
// fetchs the given service details from DB
async function getService(req, res) {
    let serviceInfo = await Service.findOne({"name" : req.query.service});
    if(serviceInfo) {
        res.json(serviceInfo)
    } else {
        res.json({
            'msg': `SERVICES INFO DON'T EXIST INSIDE DB` 
        })
    }
}
// signup service
const signupService = async (req, res) => {
    const newService = new Service(req.body);

    newService.save()
        .then(() => res.json(`Service saved in DB successfuly ${req.body.name}`))
        .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = {getService, getAllService, signupService}