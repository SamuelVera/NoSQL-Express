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
    let apps = await App.find().select(['nombre', 'fechaLanzamiento'
        , 'precio', 'categoria', 'programador'])
        .sort({_id: 1})
        .populate('programador','email')
    res.render('getAllApps', {apps, title: 'NoSQL'})
}

exports.getAllCategorias = async (req, res) => {
    let categorias = await Categoria.find()
    res.render('home', {categorias, title: 'NoSQL'})
}

exports.getProgramador = async(req, res) => {
    const _id = objectId(req.params._id)
    let programador = await Programador.findOne({
         _id
    }).populate('aplicacionesId', 'nombre')
    res.render('getProgramador', { programador, title: 'NoSQL'})
}

exports.getApp = async(req, res) => {
    const _id = req.params._id
    let app = await App.findOne({
        _id
    }).populate('programador','email')
    let version = await Version.findOne({
        appId: app._id,
        liberada: true
    }).sort({
        fechaLanzamiento: -1
    })
    let resultado = await Resena.aggregate()
    .match({ 'appId': objectId(_id) })
    .group({
        '_id': '$appId',
        'avgRating': { '$avg': { '$ifNull': ['$puntuacion',0 ] } }    
    })
    res.render('getApp', { app, version, resultado: resultado[0].avgRating, title: 'NoSQL' })
}

exports.getAppsByCategoria = async(req, res) => {
    const _id = req.params._id
    let categoria = await Categoria.findOne({
        _id
    })
    let apps = await App.find({
        'categoria._id': _id
    }).select(['nombre', 'fechaLanzamiento'
    , 'precio', 'categoria', 'programador']).populate('programador','email')
    console.log(apps)
    res.render('getAppsByCategoria', {apps, categoria, title:'NoSQL'})
}