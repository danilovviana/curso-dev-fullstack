
const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14},
    { name: 'Ciclano', lastname: 'Santos', age: 23},
    { name: 'Beltrano', lastname: 'Moreira', age: 36},
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)
