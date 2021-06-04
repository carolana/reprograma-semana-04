//Vamos criar um sistema que armazena informações de livros para que seja possível gerenciar:

    // - os livros que já lemos e os livros que estão na nossa listinha de desejos

// No arquivo app.js desenvolva sua lógica para o comportamento abaixo:
    //deverá ser possível buscar livros pela categoria
    //Me recomenda livros pra ler? Deverá listar livros que já foram lidos e que são recomendados
    //Minha lista de desejo: Deverá listar livros que ainda não foram lidos
    //Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.
    //O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas, conforme instrução acima.


const lista_livros = require('./database')

lista_livros.sort((a, b) => a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')
const verLivrosporCategorias = pegarEntrada.question('Voce deseja encontrar um livro por categoria? (S/N) ')


if ((verLivrosporCategorias === 'S') || (verLivrosporCategorias === 's')) {
    console.log("Essas são as opções disponíveis: ");
    let categorias_disponiveis = ["Ficção Juvenil", "Poesia", "Romance", "Discriminação e racismo", "Ciências Sociais", "Romance", "Biografia", "Infantil", "Musical", "Literatura"];
    console.table(categorias_disponiveis);
    const categoria_selecionada = pegarEntrada.question("Qual categoria voce escolhe? ");
    const categoria = lista_livros.filter(livros => livros.categoria === categoria_selecionada);
    console.table(categoria);
        if (recomenda = (lista_livros.filter(lista_recomendacao => lista_recomendacao.recomenda === true) &&(lista_livros.filter(lista_recomendacao_dois => lista_recomendacao_dois.leu === true)))) {
            console.log("Essas são as minhas recomendações:");
            console.table(recomenda)
        }
            if (desejo = (lista_livros.filter(lista_desejo => lista_desejo.leu === false))) {
                console.log("Essa é a minha lista de desejo:");
                console.table(desejo)
            }
} else {
    console.log("Esses são todos os livros disponiveis: ")
    console.table(lista_livros)
}