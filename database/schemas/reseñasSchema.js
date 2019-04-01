const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const resenasSchema = new mongoose.Schema({
    //Definición del Schema
    puntuacion: {
        type: Number,
        min: 0,
        max: 5
    },
    comentario: {
        type: String
    },
    fecha: Date,
    user: {
        type: objectId,
        ref: 'Usuario'
    },
    appId: {
        type: objectId,
        ref: 'App'
    }
})

module.exports = resenasSchema