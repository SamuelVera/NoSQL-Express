const mongoose = require('mongoose')

const permisosSchema = new mongoose.Schema({
    //Definición del Schema
    nombre: {
        type: String
    },
    descripcion:{
        type: [String]
    }
})

module.exports = permisosSchema