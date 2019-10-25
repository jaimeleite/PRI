var http = require('http')
var fs = require('fs')
var divisao
var id_pagina

var myserver = http.createServer(function (request, result) {
    divisao = request.url.split('/')
    id_pagina = divisao[divisao.length-1]
    var ms = divisao[divisao.length-2]
    
    if(request.method == 'GET'){
        if(request.url == '/musica/w3.css'){
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro){
                    result.writeHead(200, {'Content-Type':'text/css'}) 
                    result.write(dados);
                }
                else {
                    result.writeHead(200, {'Content-Type':'text/plain'}) 
                    result.write('Erro na leitura do CSS...')
                }
                result.end()  
            });
        }
        else if(parseInt(id_pagina,10) < 449 && ms=='musica'){
            fs.readFile('data/doc' + id_pagina +'.xml',function(err,data){
                result.writeHead(200,{'Content-Type':'text/xml'})
                result.write(data)
                result.end()
            })
            
        }
        else if(id_pagina=="doc2html.xsl"){
            fs.readFile('doc2html.xsl', (erro, dados)=>{
                if(!erro){
                    result.writeHead(200, {'Content-Type':'text/xml'}) 
                    result.write(dados);
                }
                else {
                    result.writeHead(200, {'Content-Type':'text/plain'}) 
                    result.write('Erro na leitura do doc2html.xsl...')
                }
                result.end()
            });
        }
        else {
            result.end('Erro: Pedido não suportado [' + request.url + ']');
        }
    }
    else {
        result.end('Erro: Método não suportado [' + req.method + ']');
    }
})
myserver.listen(3021)

console.log('Servidor à escuta na porta 3021...');