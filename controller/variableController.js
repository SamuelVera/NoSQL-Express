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

exports.goToCreateApp = async (req, res) => {
    let permisos = await Permiso.find()
    let categorias = await Categoria.find().sort({
        codigo: 1
    })
    res.render('createApp',{ 
        _id: req.params._id,
        permisos,
        categorias
    })
}