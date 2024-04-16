const express = require('express')
const app = express()

app.get("/", function(req, resp){
    resp.sendFile(__dirname + "/html/quizPrincipal.html")
})

app.get("/quizPrincipal" , function(req, resp){
    resp.sendFile(__dirname + "/html/quizPrincipal.html")
})

app.get("/questoes1", function(req, resp){
    resp.sendFile(__dirname + "/html/questoes1.html")
})

app.get("/questoes2", function(req, resp){
    resp.sendFile(__dirname + "/html/questoes2.html")
})

app.get("/questoes3", function(req, resp){
    resp.sendFile(__dirname + "/html/questoes3.html")
})

app.listen(8080, function(){
    console.log("SITE FUNCIONANDO EM: localhost:8080")
})