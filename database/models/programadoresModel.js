const mongoose = require('mongoose')
const programadoresSchema = require('../schemas/programadoresSchema')

const programadoresModel = mongoose.model('Programador', programadoresSchema)

module.exports = programadoresModel