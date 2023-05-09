/* Exercício 1
function somaNumeros() {
let valor = 100;
let soma = 0
while(valor !== 0) {
    valor = Number(prompt("Digite um número: \n"))
    soma += valor;
}
return soma;
}

console.log(somaNumeros());
*/

// Exercício 2
// Escreva uma função que receba um array com números e devolva qual o maior
// dentro dele

/*
const numeros = [12,14,18,20,10,8];
function maiorNumero(numeros){
    let maior = 0;
   for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior) {
        maior = numeros[i]
    }
 }
 return maior; 
}
console.log(numeros)
console.log(maiorNumero(numeros))
*/

//Exercício 3

/*const palavras = ['Oi','sumido','tudo','bem?','Saudades!'];
function construirFrase(arrayPalavras) {
    let frase = '';
    for (let palavra of palavras) {
    console.log(palavra);
    frase = frase + ' ' + palavra;
    }
return frase
    }
console.log(construirFrase(palavras).trim())
*/

let paisesAr = ['Brasil','Argentina','Rússia','Lichten'];
let contadorAr = 1;
for(let pais of paisesAr) {
    console.log(contadorAr++ + '- ' + pais + '/BR');
    switch(pais) {
        case 'Brasil':
            break;
            default:
                break;
    }
}
console.log(contadorAr++ + '- ' + pais + '/AR');
switch(pais) {
    case 'Argentina':
        break;
        default:
            break;
}
console.log(contadorAr++ + '- ' + pais + 'RU');
switch(pais) {
    case 'Rússia':
        break;
        default:
            break;
}
console.log(contadorAr++ + '- ' + pais + '/LI');
switch(pais) {
    case 'Lichtein':
        break;
        default:
            break;
}
