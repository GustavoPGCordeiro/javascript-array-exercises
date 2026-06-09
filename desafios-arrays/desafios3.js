//  Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const listaAleatoria = [1, 2, 3, 4, 5];

listaAleatoria.forEach((item, indice) =>{
    console.log(`Índice: ${indice}, Valor: ${item}`);
} )


//Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função 
//de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array
//e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback);
}

function dobraNumero(num) {
    return num * 2; 
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados);


//Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um 
//número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) 
//desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);


//Utilize o método concat() para unir os arrays das
//turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para 
//buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem 
//informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso,
//por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
const alunoProcurado = todosAsTurmas.find(nome => nome === 'Pedro Almeida');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}


//Considere um array de números inteiros.
//Utilize o método forEach() para multiplicar cada elemento do array 
//por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize 
//o método findIndex() para encontrar o índice do número 18 no array original.

const numero = [6, 9, 12, 15, 18, 21];

numero.forEach((numeroQualquer)=>{
    numeroQualquer = numeroQualquer *3;
    console.log(numeroQualquer);
})