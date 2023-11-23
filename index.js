const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como templat engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// os aquivos públicos ficarão na pasta public
app.use(express.static("public"))

app.get('/', (requisicao, resposta) => {
    //resposta.send("Olá, mundo")
    resposta.render('home')
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})