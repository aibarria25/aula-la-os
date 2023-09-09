/*
Exercícios de interpretação de código

1- 
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
Vai somar os numeros de 0 ate 4 (0 + 1 + 2 + 3 + 4 = 10)

2- 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) No console vai ser impresso os numeros que sejam maior do que 18 (19, 21, 23, 25, 27, 30)
*b)

3- No console vai ser impresso 4 linhas de asteriscos e vai adicionar um astericos em cada linha ate chegar a 4
*
**
***
****


//Exercícios de escrita de código
//1- 

const bichinhos = prompt("Quantos bichinhos de estimação você tem?:")
let arrayNomes = []

if (Number(bichinhos) === 0){
  console.log("Que pena! Você pode adotar um pet!")
}else{
 for (let i = 0; i < bichinhos; i++){
  let nomes = prompt("Quais sao os nomes deles?:")
  arrayNomes.push(nomes)
 }
  console.log(arrayNomes)
}
*/

//2-
//a
const arrayOriginal= [31, 28, 63, 36, 54, 97, 3]
/*
for (let numero of arrayOriginal){
  console.log(numero)
}


//b
const divisao = (arrayOriginal) => {
  for (let i = 0; i < arrayOriginal.length; i++){
    const elementos = arrayOriginal[i] / 10
    console.log(elementos)
  }
}
divisao(arrayOriginal)

//c
 const numerosPares = (arrayOriginal) =>{
  novoArray = []
  for(let i = 0; i < arrayOriginal.length; i++){
    const elementos = arrayOriginal[i] % 2 === 0
    if (elementos){
      novoArray.push(arrayOriginal[i])
    }
  }
  console.log(novoArray)
 }
 numerosPares(arrayOriginal)

//d
const arrayStrings = (arrayOriginal) => {
let  strings = []
for (let i = 0 ; i < arrayOriginal.length; i++){
   const frase = `Elemento do index ${i} é: ${arrayOriginal[i]}`
    strings.push(frase)
}
console.log(strings)
}
arrayStrings(arrayOriginal)
*/
//e

