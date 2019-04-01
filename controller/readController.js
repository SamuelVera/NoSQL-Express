const mongoose = require('mongoose')
const App = require('../database/models/appsModel')
const User = require('../database/models/usersModel')
const Pais = require('../database/models/paisesModel')
const Categoria = require('../database/models/categoriasModel')
const Resena = require('../database/models/reseñasModel')
const Programador = require('../database/models/programadoresModel')
const Permiso = require('../database/models/permisosModel')
const Version = require('../database/models/versionesModel')
const objectId = mongoose.Types.ObjectId

exports.getAllApps = async (req, res) => {
    try{
        let response = await App.find()
        res.json(response)
    }catch(err){
        console.log(err)
        return null
    }
}

exports.getAllCategorias = async (req, res) => {
    try{
        let response = await Categoria.find()
        res.json(response)
    }catch(err){
        console.log(err)
        return null
    }
}