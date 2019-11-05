const express = require('express');
const router = express.Router();
var {ObjectId} = require('mongodb')

var Filmes = require('../controllers/filmes')

/*GET: lista de filmes*/
router.get('/filmes', function(req, res){
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/*GET: recupera a informação de um filme*/
router.get('/filmes/:id', function(req, res){
    Filmes.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

// POST: inserir um filme
router.post('/filmes', function(req,res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})


router.delete('/filmes/:id', function(req, res) {
    Filmes.remover(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router