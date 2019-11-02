var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname + "/../data/alunos.json"

/* GET home page. */
router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {listAlunos: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.get('/registarAluno', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('registoAluno', {listAlunos: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.get('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  console.log(id)
  jsonfile.readFile(myBD, (erro, alunos)=>{
    var index = alunos.findIndex(c => c.identificador == id)
      res.render('seeAluno', {al: alunos[index]})
  })
})


router.get('/registoNotas/:id', function(req, res) {
  var id = req.params.id
  console.log(id)
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('registaNotas', {idAluno: id})
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.post('/alunos/:idAluno/notas', function(req, res) {
  var ident = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos)=>{
      if(!erro){
        var indice = alunos.findIndex(c => c.identificador == ident)
        var alu = alunos[indice]
        alu.notas.push(req.body)
      
        alunos.splice(indice, 1)
        alunos.push(alu)
        jsonfile.writeFile(myBD, alunos, erro => {
            if(erro) console.log(erro)
            else console.log('Registo gravado com sucesso.')
        })
      }
      res.render('index', {listAlunos: alunos})
  })
})

router.post('/alunos', function(req, res) {
    var al = req.body
    jsonfile.readFile(myBD, (erro, alunos)=>{
        if(!erro){
          var i,controlo = 0
          for (i = 0; alunos[i]; i++) {
            if(al.identificador == alunos[i].identificador){
              controlo = 1
            }
          }
          if(controlo == 0){
            al.notas=[]
            alunos.push(al)
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo gravado com sucesso.')
            })
          }
        }
        res.render('registoAluno', {listAlunos: alunos})
    })
})

router.delete('/alunos/:idAluno', function(req, res) {
  var identificador = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var posicao = alunos.findIndex(c => c.identificador == identificador)
      if(posicao > -1){
        alunos.splice(posicao, 1)
        jsonfile.writeFile(myBD, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Remoção do aluno efetuada com sucesso.')
        })
      }
    }
    res.render('index', {listAlunos: alunos})
  })
})

router.delete('/alunos/:idAluno/notas/:indicador', function(req, res) {
  var indica = req.params.indicador
  var identAluno = req.params.idAluno
  var newAluno, posAluno

  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      posAluno = alunos.findIndex(c => c.identificador == identAluno)
          
      var indNota = alunos[posAluno].notas.findIndex(c => c.indicador = indica)
      alunos[posAluno].notas.splice(indNota,1)
          
      newAluno = alunos[posAluno]
          
      alunos.splice(posAluno, 1)
      alunos.push(newAluno)
          
      var indNewAluno = alunos.findIndex(c => c.identificador == newAluno.identificador)

      jsonfile.writeFile(myBD, alunos, erro => {
        if(erro) console.log(erro)
        else{
          console.log('Nota removida com sucesso.')
        }
      })
    }
    res.render('seeAluno', {al: alunos[indNewAluno]})
  })
})

module.exports = router;
