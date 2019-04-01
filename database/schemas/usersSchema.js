const mongoose = require('mongoose')
const paisesSchema = require('./paisesSchema')
const appsSchema = require('./appsSchema')
const objectId = mongoose.Schema.Types.ObjectId

const usersSchema = new mongoose.Schema({
    //Definición del Schema
    email: {
        type: String,
        lowercase: true
    },
    nombre: {
        type: String
    },
    pais: paisesSchema,
    tarjetasCredito: [{
        numero: Number,
        fechaExp: Date,
        fechaAdd: Date
    }],
    wishList: [appsSchema],
    biblioteca: [{
        appId: {
            type: objectId,
            ref: 'App'
        },
        version: {
            type: objectId,
            ref: 'Version'
        } 
    }]
})

module.exports = usersSchema