const express = require ('express')
const app = express()
const PORT = 8080

app.get('/', function(){
    console.log("rota / acessada")


    response.send("bem vindo á API da turma!")
})

app.get('/sobre', function(request,response){
    console.log("rota/sobre")


    response.send("Essa é uma API feita com Express.j")
})

app.get('/alunos', function(request,response){
    console.log("rota/alunos")


    response.send(["miguel,biel,alek,lucas,grabriel,isak]"])
})

app.get('/professor', function(request,response){
    console.log("rota /professor")


    response.send("nome do professor é rafael da silva")
})

app.get('/horario', function(request,response){
    console.log("rota/horario")


    response.send("aula de segunda á sexta, das 19h ás 22h")
})




app.listen(PORT, function(){
    console.log("servidor rodando com sucesso")
})