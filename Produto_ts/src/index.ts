import express from "express";
import { router } from "./config/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.clear();    //Sempre limpa o console antes de mostrar a aplicação rodando
    console.log("Aplicação rodando na porta 3000");
});

// const produtos : Produto[] = [];
// //Método GET
// app.get("/", (request, response) => {
//     return response.status(200).json({
//         message : "Deu certo!",
//         data : produtos
//     });
// });

// //Método POST
// app.post("/", (request, response) => {
//     const produto = request.body;
//     produtos.push(produto);

//     return response.status(201).json({
//         message : "Produto cadastrado.",
//         data : produto
//     });
// });

