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
        categorias,
        title: 'NoSQL'
    })
}

exports.goToAddToWishList = async (req, res) => {
    const user = await User.findOne({
        _id: req.params._id
    })
    const apps = await App.find()
    .select(['_id','nombre'])
    res.render('addToWishList',{
        user,
        apps,
        title: 'NoSQL'
    })
}

exports.goToDownloadApp = async (req, res) => {
    const user = await User.findOne({
        _id: req.params._id
    })

    let aux = []
    aux.push(new objectId())
    
    user.biblioteca.forEach((val) => {
        aux.push(val.appId)
    })

    const apps = await App.find({
        _id: {
            $nin: aux
        }
    })
    .select(['_id','nombre'])

    res.render('downloadApp',{
        user,
        apps,
        title: 'NoSQL'
    })
}

exports.lookForUpdate = async (req, res) => {
    const {
        appId,
        versionId
    } = req.params

    const mostRecent = await Version.findOne({
        appId,
        liberada: true
    })
    .select(['_id'])
    .sort({
        fechaLanzamiento: -1
    })

    if(mostRecent){
        if(mostRecent._id == versionId){
            res.json({
                "msg": "Tienes la versión más actual"
            })
        }else{
            res.json({
                "msg": "No Tienes la versión más actual"
            })
        }
    }else{
        res.json({
            "msg": "No existe versión liberada para esta app"
        })
    }
    
}

exports.goToAddCreditCard = async (req, res) => {
    res.render('addCreditCard',{
        _id: req.params._id,
        title: 'NoSQL'
    })
}

exports.goToUpdateUser = async (req, res) => {
    const user = await User.findOne({
        _id: req.params._id
    })
    const paises = await Pais.find()
    .select(['nombre'])

    res.render('updateUser',{
        _id: req.params._id,
        user,
        paises
    })
}

exports.goToAddProgramador = async (req, res) => {
    const paises = await Pais.find()
    res.render('addProgramador',{
        paises,
        title: 'NoSQL'
    })
}