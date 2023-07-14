const express = require('express');

const app = express();

app.use(express.json());

//Método GET
app.get("/", (request, response) => {
    return response.status(200).json({
        message : "Deu certo!"
    });
});

//Método POST
app.post("/", (request, response) => {
    return response.status(201).json({
        message : "Produto cadastrado."
    });
})

app.listen(3000, () => {
    console.clear();    //Sempre limpa o console antes de mostrar a aplicação rodando
    console.log("Aplicação rodando na porta 3000");
});