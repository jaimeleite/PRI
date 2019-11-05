var Filme = require('../models/filmes')
var {ObjectId} = require('mongodb')
const Filmes = module.exports

//Devolve a lista de alunos
module.exports.listar = () => {
    return Filme
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

module.exports.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

module.exports.inserir = filme => {
    filme._id = ObjectId()
    
    var filtrarVazios = filme.cast.filter(function (val) {
        return val != '';
    });
    filme.cast = filtrarVazios;

    var filtrarVazios2 = filme.genres.filter(function (val2) {
        return val2 != '';
    });
    filme.genres = filtrarVazios2;

    var new_filme = new Filme(filme)
    return new_filme.save()
}

Filmes.remover = id_filme => {
    return Filme
        .deleteOne({_id:id_filme})
        .exec()
}