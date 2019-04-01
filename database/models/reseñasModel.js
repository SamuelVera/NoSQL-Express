const mongoose = require('mongoose')
const resenasSchema = require('../schemas/reseñasSchema')

const resenasModel = mongoose.model('Resena', resenasSchema)

module.exports = resenasModel