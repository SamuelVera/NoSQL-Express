const mongoose = require('mongoose')

const categoriasSchema = new mongoose.Schema({
        //Definición del Schema
    codigo: Number,
    nombre: String
})

module.exports = categoriasSchema