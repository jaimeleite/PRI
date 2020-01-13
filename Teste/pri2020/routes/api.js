var express = require('express');
var router = express.Router();

var Publicacoes = require('../controllers/publicacoes')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pubs', function(req, res, next) {
    if(req.query.type && req.query.year){
        Publicacoes.filtrarPorTipoEAno(req.query.type, req.query.year)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.type){
        Publicacoes.filtrarPorTipo(req.query.type)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.autor){
        Publicacoes.filtrarPorAutor(req.query.autor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Publicacoes.listarPublicacoes()
            .then(function (dados) {
              response = []
              dados.forEach(element => {
                item = {
                  id: element.id,
                  title: element.title,
                  year : element.year,
                  type: element.type
                }
                response.push(item)
              });
              res.jsonp(response);
            })
            .catch(e => res.status(500).jsonp(e))
    }
});

router.get('/pubs/:id', function(req, res, next) {
    Publicacoes.listarPorId(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).jsonp(e))
});

router.get('/types', function(req, res, next) {
    Publicacoes.listarTipos()
            .then(dados => res.jsonp(dados))
            .catch(e => res.status(500).jsonp(e))
});

router.get('/autores', function(req, res, next) {
    Publicacoes.listarAutores()
            .then(function (dados) {
              response = []
              dados.forEach(element => {
                element.authors.forEach(valor => {
                    response.push(valor)
                })
              });
              res.jsonp(response.sort());
            })
            .catch(e => res.status(500).jsonp(e))
});

module.exports = router;
