import express from "express";

const app = express();

const produtos : any = [];

app.use(express.json());

//Método GET
app.get("/", (request, response) => {
    return response.status(200).json({
        message : "Deu certo!",
        data : produtos
    });
});

//Método POST
app.post("/", (request, response) => {
    const produto = request.body;
    produtos.push(produto);

    return response.status(201).json({
        message : "Produto cadastrado.",
        data : produto
    });
});

app.listen(3000, () => {
    console.clear();    //Sempre limpa o console antes de mostrar a aplicação rodando
    console.log("Aplicação rodando na porta 3000");
});