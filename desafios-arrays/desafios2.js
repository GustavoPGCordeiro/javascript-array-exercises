//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const arrayAleatoria = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i of arrayAleatoria){
    console.log(i);
}


//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function exercício2(){
    for(let f = 0; f < arrayAleatoria.length; f++){
        console.log(f, arrayAleatoria[f]);
        
        
    }


}

exercício2();

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numerosInteiros = [10, 20, 30, 40, 50, 60, 70, 80];
let soma = 0;

function somaDosInteiros(){
    for(let g of numerosInteiros){
        soma += g;
    }
}
somaDosInteiros();




//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, 
// no seguinte formato:'o menor número é X e o maior número é Y'.

function maiorEMenorNumero(){
    let maior = numerosInteiros[0];
    let menor = numerosInteiros[0];

    for(let j of numerosInteiros){
        if( j > maior){
            maior = j;
        }

        if( j < menor){
            menor = j;
        }

    }
    console.log(`o menor número é ${menor} e o maior número é ${maior}`);
    
}

maiorEMenorNumero();




//Crie um programa que utilize um laço for para percorrer uma array 
// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares 
// contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for(let x of numeros){
    if(x % 2 === 0){
        console.log(x);
            
        }
    }




//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numerosParaMedia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaDosNumeros = 0;

for(let k of numerosParaMedia){
    somaDosNumeros += k;

}

const media = somaDosNumeros/ numerosParaMedia.length;

console.log(`A média dos elementos do array numerosParaMedia é ${media}`);


