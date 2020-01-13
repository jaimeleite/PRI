var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      var legs = []

      legs = dados.data

      res.render('index', { tipologias: legs });
    })
    .catch(e => res.jsonp(e))
});

router.get('/obtemInfo/:tipologiaId', async(req,res, next) => {
  //obter informações da tipologia
  let resp1 = await axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.tipologiaId + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  
  //obter lista de entidades da tipologia
  let resp2 = await axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.tipologiaId + '/elementos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')

  //obter os processos em que é dona
  let resp3 = await axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.tipologiaId + '/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
   
  //obter os processos em que é participante
  let resp4 = await axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.tipologiaId + '/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')

  res.render('tipologia', {id: req.params.tipologiaId, infoGeral: resp1.data, entidades: resp2.data, processos: resp3.data, participante: resp4.data})
})

module.exports = router;
