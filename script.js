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


