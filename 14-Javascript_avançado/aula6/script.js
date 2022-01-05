
const clientes = [
    { name: 'Fulano', score: 14},
    { name: 'Ciclano', score: 23},
    { name: 'Beltrano', score: 98},
    { name: 'Danilo', score: 50},
    { name: 'Cecília', score: 42},
]

// acc = acumulador
// curr = current
const clientesFinal = clientes.reduce((acc, curr ) => {
    if (curr.score > 50){
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc

}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)


