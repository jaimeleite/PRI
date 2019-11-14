const mongoose = require('mongoose')
var {ObjectId} = require('mongodb')

var obraSchema = new mongoose.Schema({
    id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String
})

module.exports = mongoose.model('obras', obraSchema)