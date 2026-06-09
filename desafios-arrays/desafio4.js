//Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo 
//todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];

function unificadorDeArrays(){
    return [...a,...b,...c];
}

const d = unificadorDeArrays();
console.log(d);

//Crie um array de números chamado valores. Depois,escreva um programa que 
//some todos os elementos deste array utilizando o método reduce.

const valores = [21,99,12,0,7,8,99,72,16];

const somaDosElementos = valores.reduce((acumulador, valorInicial)=> acumulador + valorInicial, 0);

console.log(somaDosElementos);


//Considere duas listas de cores:
//const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
//Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresConcatenadas = [...new Set(coresLista1.concat(coresLista2))];


//Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const w = [12,33,13,55,44,46,76,88,87,98,122,49,66];

function numerosPares(){
    const x = w.filter((numeros)=> numeros % 2 === 0);
    return x;
}
console.log(numerosPares());

//Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const t = [3,6,12,33,44,58,99,105,27,87,90,91,14,17,16];

function filtro(){
    const p = t.filter((elementos)=> elementos %3 ===0 && elementos > 5 );
    return p;
}

console.log(filtro());


//Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(num) {
    return num.reduce((acumulator, firstValue) => acumulator + firstValue, 0);
}


const num = [1, 2, 3, 4, 5, 10];
console.log(somaArray(num));
