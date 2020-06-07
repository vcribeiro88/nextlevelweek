const express = require("express")
const server = express()

// Configurar a pasta public
server.use(express.static("public"))

// Configuras as rotas

// Página Home
server.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

// Página create point
server.get("/create-point", (req, res) =>{
    res.sendFile(__dirname + "/views/create-point.html")
})

// Página search results
server.get("/search-results", (req, res) =>{
    res.sendFile(__dirname + "/views/search-results.html")
})

// Ligar servidor
server.listen(3000)