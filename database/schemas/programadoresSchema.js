const mongoose = require('mongoose')
const paisesSchema = require('./paisesSchema')
const objectId = mongoose.Schema.Types.ObjectId

const programadoresSchema = new mongoose.Schema({
        //Definición del Schema
    email: {
        type: String,
        lowercase: true
    },
    nombre: {
        type: String
    },
    direccion: {
        type: String
    },
    sitioWeb: {
        type: String
    },
    pais: paisesSchema,
    aplicacionesId: [{
        type: objectId,
        ref: 'App'
    }]
})

module.exports = programadoresSchema