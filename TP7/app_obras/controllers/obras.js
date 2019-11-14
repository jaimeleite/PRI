var Obra = require('../models/obras')
var {ObjectId} = require('mongodb')
const Obras = module.exports

Obras.getCompositores = () => {
    return Obra
        .distinct('compositor')
        .exec()
}


Obras.obterPorNome = compositor => {
    return Obra
        .find({compositor : compositor}) 
        .exec()
}

Obras.listar = () => {
    return Obra
        .find()
        .exec()
}

Obras.filtrarPeriodo = periodo => {
    return Obra
        .find({periodo: periodo})
        .exec()
}

Obras.filtrarAnocriacao = anoCriacao => {
    return Obra
        .find({anoCriacao: anoCriacao })
        .exec()
}

Obras.filtrarCompositor = compositor => {
    return Obra
        .find({compositor: compositor})
        .exec()
}