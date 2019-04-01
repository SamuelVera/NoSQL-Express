const mongoose = require('mongoose')
const appsSchema = require('../schemas/appsSchema')

const appsModel = mongoose.model('App', appsSchema)

module.exports = appsModel;