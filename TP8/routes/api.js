const express = require('express');
const router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro')
var ncp = require('ncp').ncp;

var multer = require('multer')
var upload = multer({ dest: 'uploads/'})

/* GET users listing. */
router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/ficheiros', upload.array('ficheiro'), function(req,res){
  var guardaDescricao = "";

  for (i = 0; i < req.files.length; i++) {
    const pathAntigo = __dirname + '/../' + req.files[i].path
    const pathNovo = __dirname + '/../data/' + req.files[i].originalname
    
    fs.rename(pathAntigo, pathNovo, function (err) {
      if (err) throw err
    })

    if(req.files[i].mimetype.includes('image/')){
      var caminhoImagem = __dirname + '/../public/images/' + req.files[i].originalname
      ncp(pathNovo, caminhoImagem, function (err) {
          if (err) console.error('Erro:' + err);
          else console.log('Imagem copiada com sucesso');
      });  
    }

    if(req.files.length == 1) guardaDescricao = req.body.desc
    else guardaDescricao = req.body.desc[i]

    var data = new Date()

    var novoFicheiro = new Ficheiro(
      {
        data: data.toISOString(),
        desc: guardaDescricao,
        name: req.files[i].originalname,
        path: pathNovo,
        mimetype: req.files[i].mimetype,
        size: req.files[i].size
      });

      novoFicheiro.save();
  }

    res.redirect('/');
})

module.exports = router;
