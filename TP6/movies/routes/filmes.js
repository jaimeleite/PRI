var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3004/api/filmes')
        .then(dados => {
            res.render('listagem-filmes', {lista: dados.data});
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
});

router.post('/', function(req,res){
    axios.post('http://localhost:3004/api/filmes', req.body)
        .then(dados => {
            res.redirect('/')
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

router.get('/inserir', function(req,res){
    res.render('formar-filme')
})

router.get('/:id', function(req,res){
    var id_filme = req.params.id

    axios.get('http://localhost:3004/api/filmes/' + id_filme)
        .then(dados => {
        res.render('apresenta_filme', {al: dados.data})
      })
})

router.delete('/:id', function(req, res, next){
    var armazena_id = req.params.id
    
    axios.delete('http://localhost:3004/api/filmes/' + armazena_id)
    .then(dados => {
      res.redirect(303,'/')
    })
    .catch(erro => {
      res.render('error', {error : erro})
    })
  })

module.exports = router;