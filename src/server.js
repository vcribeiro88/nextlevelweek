const express = require("express")
const server = express()

// Configuras as rotas

// Página Home
// Req => Requisição
// Res => Respostas
server.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

// Ligar servidor
server.listen(3000)