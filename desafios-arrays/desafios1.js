//1 - Crie uma função que receba dois arrays e os concatene em um único array.

let array1 = [];
let array2 = [];

let array12 = array1.concat(array2)


//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar 
//um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(2, 7);
console.log(parteNumeros);



//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
//const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
//Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as 
//frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2,2, 'Kiwi','Pêssego');




//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
//Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de 
//menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = [];
const menuDeSobremesas = [];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);




//5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma 
// matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

//Dicas:

//comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
//você pode resolver usando um for dentro de outro for.

const listaBidimensional = []; // Inicializa a lista principal
let valor = 1; // Inicia o contador de valores

for (let i = 0; i < 3; i++) {
    const linha = []; // Cria uma nova linha

    for (let j = 0; j < 3; j++) {
        const matriz = []; // Cria a matriz 3x3

        for (let x = 0; x < 3; x++) {
            const linhaMatriz = []; // Cria uma linha da matriz

            for (let y = 0; y < 3; y++) {
                linhaMatriz.push(valor++); // Adiciona o valor e incrementa
            }

            matriz.push(linhaMatriz); // Adiciona a linha na matriz
        }

        linha.push(matriz); // Adiciona a matriz à linha principal
    }

    listaBidimensional.push(linha); // Adiciona a linha à lista principal
}





//6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional 
// matriz criada no exercício anterior.

const elemento = listaBidimensional[1][2];
console.log(elemento);






