const mongoose = require('mongoose')
const categoriasSchema = require('../schemas/categoriasSchema')

const categoriasModel = mongoose.model('Categoria', categoriasSchema)

module.exports = categoriasModel