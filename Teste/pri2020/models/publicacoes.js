const mongoose = require('mongoose')
var {ObjectId} = require('mongodb')

/*        "type":"inproceedings", 
		"id": "cisti2017",
		"authors":[
		  			"José Carlos Ramalho",
		  			"André Pereira",
		  			"Miguel Ferreira",
		  			"Luis Faria"
		  ],
		"title":"RODA-in: A generic tool for the mass creation of Submission Information Packages",
		"booktitle":"CISTI'2017 - 12ª Conferência Ibérica de Sistemas e Tecnologias de Informação",
		"address":"ISCTE, Lisboa, Portugal",
		"year":"2017",
		"month":"06.24", 
		"doi":"http://hdl.handle.net/1822/46093"*/

var publicacaoSchema = new mongoose.Schema({
    _id: ObjectId,
    type: String,
    idOriginal: String,
    authors: [String],
    title: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    doi: String
})

module.exports = mongoose.model('publicacoes', publicacaoSchema)