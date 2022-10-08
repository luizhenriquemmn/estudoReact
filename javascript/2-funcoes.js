/*Funcoes normais*/ 
function ola(){
    return 'Olá'
}

//console.log(ola())

function olaPessoa(nome){
    return `Olá ${nome}`
}

//console.log( olaPessoa('João') )

/*Arrow Functions*/

const ola2 = () => {
    return 'Olá novamente'
}

console.log(ola2())

const olaPessoa2 = (nome) => {
    return `Olá ${nome}`
}

console.log(olaPessoa2('joãozin'))

const olaPessoa3 = nome => `Olá Novamente ${nome}`
console.log(olaPessoa3('joãozin'))

const somaIdade = idade => `Sua nova idade é ${idade + 1}`
console.log (somaIdade(1))