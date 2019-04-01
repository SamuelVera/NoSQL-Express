const mongoose = require('mongoose')
const permisosSchema = require('../schemas/permisosSchema')

const permisosModel = mongoose.model('Permiso', permisosSchema)

module.exports = permisosModel