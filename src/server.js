const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

// Configurar a pasta public
server.use(express.static("public"))

// Usando template engine NunJucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configuras as rotas

// Página Home
server.get("/", (req, res) => {
    return res.render("index.html")
})

// Página create point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

// Página search results
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// Ligar servidor
server.listen(3000)