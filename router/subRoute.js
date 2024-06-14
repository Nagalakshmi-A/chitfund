const express = require('express')
const route = express.Router()
const subcontroller = require('../controller/subscriberController')

route.post('/addSubscriber/:id?',subcontroller.addsubscriber)
route.get('/getSubscriberDetails',subcontroller.getAllSub)

module.exports = route