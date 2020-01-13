var Publicacao = require('../models/publicacoes')
var {ObjectId} = require('mongodb')

module.exports.listarPublicacoes = () => {
    return Publicacao
        .find()
        .exec()
}

module.exports.listarPorId = id => {
    return Publicacao
        .find({id: id})
        .exec()
}

module.exports.listarTipos = () => {
    return Publicacao
        .distinct('type')
        .exec()
}

module.exports.listarAutores = () => {
    return Publicacao
        .find()
        .exec()
}

module.exports.filtrarPorTipo = (tipo) => {
    return Publicacao
        .find({type: tipo})
        .exec()
}

module.exports.filtrarPorAutor = (autor) => {
    return Publicacao
        .find({ authors: { "$in" : [autor]} })
        .exec()
}

module.exports.filtrarPorTipoEAno = (tipo,ano) => {
    return Publicacao
        .find({ type: tipo, year: {$gt : ano} })
        .exec()
}
