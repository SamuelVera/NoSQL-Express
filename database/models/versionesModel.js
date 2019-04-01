const mongoose = require('mongoose')
const versionesSchema = require('../schemas/versionesSchema')

const versionesModel = mongoose.model('Version', versionesSchema)

module.exports = versionesModel