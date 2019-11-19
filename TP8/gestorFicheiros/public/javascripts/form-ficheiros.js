$(function() {
    var cont = 1
    $("#mais1").click(e => {
        e.preventDefault()
        cont++
        var campo = $('<div></div>', {class: 'w3-container', id: 'f'+cont})
        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc'+cont})
        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "desc"})
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro'+cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: "file", name: "ficheiro"})
        $("#lista").append(campo)
        $("#f"+cont).append(desc)
        $("#desc"+cont).append(descLabel, descInput)
        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
    })
})

function show_me(linha, f){
    var ficheiro = $('<p>Name: ' + f.name + '</p><p>Type: ' + f.mimetype + '</p><p>Size: ' + f.size + '</p>')
    
    if(f.mimetype.includes('image/')) {
        $('#imagemdisplay').empty()
        $('#imagemdisplay').append($('<h1>Imagem</h1>'))
        $('#imagemdisplay').append(ficheiro)
        $('#imagemdisplay').load(f.path)
        $('#imagemdisplay').append($('<img>', {id : 'image',src : 'images/' + f.name, width: '400'}))
        $('#imagemdisplay').modal()
    }
    else {
        $('#display').empty()
        $('#display').append($('<h1>Ficheiro</h1>'))
        $('#display').append(ficheiro)
        $('#display').modal()
    }
}