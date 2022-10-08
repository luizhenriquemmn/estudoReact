
class Animal {
    constructor(f){
        this.familia = f
    }
}


class Cachorro extends Animal{
    constructor(n,i){
        super('Carnivoros')
        this.nome = n
        this.idade = i
    }

    nome =  'Rex'

    latir = () => {
        return `${this.nome}: au! au!`
    }

}

let rex = new Cachorro('Rex',2)
console.log(rex)
console.log(rex.latir())
console.log(rex.familia)

let max = new Cachorro('Max',1)
console.log(max)
console.log(max.latir())
