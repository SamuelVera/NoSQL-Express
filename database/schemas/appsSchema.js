const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const categoriasSchema = require('./categoriasSchema')
const permisosSchema = require('./permisosSchema')

const appsSchema = new mongoose.Schema({
        //Definición del Schema
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    fechaLanzamiento: Date,
    precio: {
        type: Number,
        min: 0,
        default: 0
    },
    features: [String],
    categoria: categoriasSchema,
    idioma: [String],
    categoriasRelacionadas: [categoriasSchema],
    programador: {
        type: String,
        ref: 'Programador'
    },
    permisos: [permisosSchema]
})

module.exports = appsSchema