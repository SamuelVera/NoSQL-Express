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

exports.addToWishList = async (req, res) => {
    let { app } = req.body
    app = objectId(app)
    const appToPush = await App.findOne({
        _id: app
    })
    await User.updateOne({
        _id: req.params._id
    },{
        $push: { wishList: appToPush }
    })
    res.redirect(`/verUser/${req.params._id}`)
}

exports.downloadApp = async (req, res) => {
    const { app } = req.body
    const appId = objectId(app)
    let version = await Version.findOne({
        appId: app,
        liberada: true
    })
    .select(['_id'])
    .sort({
        fechaLanzamiento: -1
    })
    if(version){
        version = version._id
    }else{
        version = null
    }
    const toPush = {
        appId,
        version
    }
    await User.updateOne({
        _id: req.params._id
    },{
        $push: { biblioteca: toPush }
    })
    res.redirect(`/verUser/${req.params._id}`)
}

exports.addCreditCard = async (req, res) => {
    const {
        numero,
        fechaExp
    } = req.body
    const fechaAdd = new Date()
    const toPush = {
        numero,
        fechaExp,
        fechaAdd
    }
    await User.updateOne({
        _id: req.params._id
    },{
        $push: { tarjetasCredito: toPush }
    })
    res.redirect(`/verUser/${req.params._id}`)
}

exports.updateUser = async (req, res) => {
    const {
        nombre,
        email,
        pais
    } = req.body
    const paisToAdd = await Pais.findOne({
        _id: pais
    })
    await User.updateOne({
        _id: req.params._id
    },{
        $set: {
            nombre,
            email,
            pais: paisToAdd
        }
    })
    res.redirect(`/verUser/${req.params._id}`)
}