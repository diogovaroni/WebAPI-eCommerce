# Sistema de E-commerce
## Sobre o Projeto
Esse projeto é o back-end de um sistema de E-commerce baseado em microsserviços e foi desenvolvido em NodeJS e Typescript. O sistema contem duas aplicações:

:heavy_check_mark: **`- API de Produto:`** aplicação com o CRUD completo, cuja função é cadastrar produtos em uma loja virtual.

:heavy_check_mark: **`- API de Item:`** aplicação que adiciona os Produtos da aplicação anterior em "carrinhos" de compra, sendo possível listar e pesquisar os carrinhos já criados

As aplicações fazem integração entre si via Axios, onde a aplicação de Item depende da aplicaçãod e Produto. Por enquanto os produtos e carrinhos criados estão guardados apenas na memória da máquina, durante o tempo de execução das aplicações.

## Tecnologias Utilizadas

<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="HTML" width="40" height="40"/>          
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="HTML" width="40" height="40"/>    
</div>
