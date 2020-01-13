module.exports = async() => {
    const axios = require('axios')
    var legs = {legislacao: []}
    try{
        let dados = axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
        legs.legislacao = dados.data
    }
    catch(e){
        console.log('Erro:' + e)
    }

    return legs
}