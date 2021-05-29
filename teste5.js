//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function somar(num1,num2){
    return num1+num2
}

function multiplicar(num1,num2){
    return num1*num2
}

function dividir(num1,num2){
    return num1/num2
}

function subtrair(num1,num2){
    return num1-num2
}
let operacao = 'multiplicacao'

let num1 = 5

let num2 = 8

switch(operacao){

    case 'soma':
        console.log(`A soma entre ${num1} e ${num2} é = ${somar(num1,num2)}`)
        break

    case 'multiplicacao':
        console.log(`A multiplicação entre ${num1} e ${num2} é = ${multiplicar(num1,num2)}`)
        break

    case 'divisao':
        console.log(`A divisão entre ${num1} e ${num2} é = ${dividir(num1,num2)}`)
        break

    case 'subtracao':
        console.log(`A subtração entre ${num1} e ${num2} é = ${subtrair(num1,num2)}`)
        break

    default: console.log('Atribua entradas válidas.')
}
