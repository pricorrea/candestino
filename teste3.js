//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function dividir(num1, num2){
    const resultado= num1/num2
    if(resultado%2==0){
        console.log(`${resultado} é par`)
    }
    return resultado
}

console.log(dividir(9,2)) 