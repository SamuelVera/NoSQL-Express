const mongoose = require('mongoose')

const paisesSchema = new mongoose.Schema({
    //Definición del Schema
    codigo: {
        type: Number,
        min: 0
    },
    nombre: {
        type: String
    }
})

module.exports = paisesSchema