var express = require('express');
var router = express.Router();
const axios = require('axios')

var Obras = require('../controllers/obras')

router.get('/compositores/:nome', function(req, res, next) {
  var compositor = req.params.nome
  
  Obras.obterPorNome(compositor)
    .then(dados => res.render('listagem-obras', {obras: dados}))  
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/compositores', function(req, res, next) {
  Obras.getCompositores()
    .then(dados => res.render('apresenta_compositores', {compositores: dados}))  
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/obras', function(req, res, next) {
  if(req.query.periodo){
    Obras.filtrarPeriodo(req.query.periodo)
        .then(dados => res.render('listagem-obras', {obras: dados}))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.anoCriacao){
    Obras.filtrarAnocriacao(req.query.anoCriacao)
        .then(dados => res.render('listagem-obras', {obras: dados}))    
        .catch(erro => res.status(500).jsonp(erro))
  } 
  else if(req.query.compositor){
    Obras.filtrarCompositor(req.query.compositor)
        .then(dados => res.render('listagem-obras', {obras: dados}))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else {
    Obras.listar()
        .then(dados => res.render('listagem-obras', {obras: dados}))
        .catch(erro => res.status(500).jsonp(erro))
  }
});


module.exports = router;
