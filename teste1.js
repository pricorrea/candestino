//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

//let index=10
// while(index <=60){
//     if(index==35|| index==45){
//         console.log("Pulou")

//     } else{
//         console.log(index)
//     }
//     index+=5
// }

let index=10
while(index <=60){

    if(index==35 || index==45){
        console.log("Pulou")
         index+=5
        continue
    }
    console.log(index)
    index+=5
}