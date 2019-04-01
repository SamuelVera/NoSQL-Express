const mongoose = require('mongoose')
const usersSchema = require('../schemas/usersSchema')

const usersModel = mongoose.model('User', usersSchema)

module.exports = usersModel