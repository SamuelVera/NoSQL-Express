const mongoose = require('mongoose')
const paisesSchema = require('../schemas/paisesSchema')

const paisModel = mongoose.model('Pais', paisesSchema)

module.exports = paisModel