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

exports.saveApp = async (req, res) => {
    const {
        nombre,
        descripcion,
        precio,
        feature,
        categoria,
        idioma,
        permiso
    } = req.body
    const features = [feature]
    const idiomas = [idioma]
    const permisos = []
    let v = await Permiso.findOne({_id: permiso})
    permisos.push(v)
    const categoriaPrincipal = await Categoria.findOne({
        codigo: categoria
    })
    const programador = req.params._id

    const appToAdd = new App({
        nombre,
        descripcion,
        fechaLazamiento: new Date(),
        precio,
        features,
        categoria: categoriaPrincipal,
        idioma: idiomas,
        categoriasRelacionadas: [],
        programador,
        permisos
    })

    await appToAdd.save()

    res.redirect('/getAllApps')
}

