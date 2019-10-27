var http = require('http')
var fs = require('fs')
var sl
var id_pagina

var myserver = http.createServer(function (request, result) {
    sl = request.url.split('/')
    id_pagina = sl[sl.length-1]
    var ms = sl[sl.length-2]
    
    if(request.method == 'GET'){
        if(request.url == '/musica/w3.css'){
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro){
                    result.writeHead(200, {'Content-Type':'text/css'}) 
                    result.write(dados);
                }
                else {
                    result.writeHead(200, {'Content-Type':'text/plain'}) 
                    result.write('Erro ao ler o ficheiro de formatação...')
                }
                result.end()  
            })
        }
        else if(parseInt(id_pagina,10) < 449 && ms=='musica'){
            fs.readFile('data/doc' + id_pagina +'.xml',function(err,data){
                if(!erro){
                    result.writeHead(200,{'Content-Type':'text/xml'})
                    result.write(data)
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro ao ler o ficheiro ' + 'data/doc' + id_pagina + '.xml...')
                }
                res.end() 
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
                    result.write('Erro ao ler doc2html.xsl...')
                }
                result.end()
            })
        }
        else {
            res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'}) 
            res.end('Erro: Pedido não suportado [' + req.url + ']')
        }
    }
    else {
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'}) 
        res.end('Erro: Método não suportado [' + req.method + ']')
    }
})
myserver.listen(3021)

console.log('Servidor à escuta na porta 3021...');