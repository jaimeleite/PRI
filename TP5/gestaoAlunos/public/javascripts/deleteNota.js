function apagaNota(valores){
    axios.delete('/alunos/' + valores.split(",")[1] + '/notas/' + valores.split(",")[0])
        .then(response => window.location.assign('/alunos/' + valores.split(",")[1]))
        .catch(error => console.log(error))
}