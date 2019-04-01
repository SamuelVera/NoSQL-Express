const mongoose = require('mongoose')
const paisesSchema = require('./paisesSchema')
const objectId = mongoose.Schema.Types.ObjectId

const versionesSchema = new mongoose.Schema({
    //Definición del Schema
    version: String,
    size: {
        type: String,
        lowercase: true
    },
    liberada: {
        type: Boolean,
        default: false
    },
    fechaLanzamiento: Date,
    paises: [paisesSchema],
    novedades: [String],
    requisitos:{
        OS: { type: String, lowercase: true },
        RAM: { type: String, lowercase: true },
        espacioMinimo: { type: String, lowercase: true }
    },
    appId: {
        type: objectId,
        ref: 'App'
    }
})

module.exports = versionesSchema