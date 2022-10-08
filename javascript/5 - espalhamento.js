
//Spread ----------------------------------------------------------------------
const numeros = [1,2,3,4]
const novosNumeros = [...numeros,5]

//console.log(numeros)
//console.log(novosNumeros)


const rex = {
    nome: 'Rex'
}
const max = {... rex, idade: 2, familia:'carnivoro'}
max.nome = 'Max'

//console.log(rex)
//console.log(max)


//Rest ----------------------------------------------------------------------
const somar = (...numeros) => numeros.reduce((a,b)=>a+b,0)

console.log(somar(1))