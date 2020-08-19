//O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
const array = [1,2,3,4,5];
const arrayLength = array.unshift("mamão", "Banana")

console.log(arrayLength)
console.log(array)

//O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
console.log(array.shift())
