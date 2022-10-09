const produtos = [
    {
        nome: "coca cola",
        preco: 10
    },
    {
        nome: "pizza",
        preco: 35
    }
]
// map
produtos2 = produtos.map((a,i) => (
    {
        nome: a.nome,
        precos: a.preco * 2
        
    }
)
) 

//console.log(produtos2)

//Filter
produtoFilter = produtos.filter(a => (a.preco > 10))
///console.log(produtoFilter)

//reduce

const functionReduce = produtos.reduce((a,b)=>{
    return (a + b.preco);
},0)
console.log(functionReduce)
console.log("test")
