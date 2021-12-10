/*

//Laço de repetição - FOR OF

*/


let clientes = [
    {
        nome: 'Thiago',
        idade: 35,
        linguagens: ['javascript', 'python', 'php']
    },
    {
        nome: 'Danilo',
        idade: 39,
        linguagens: ['javascript', 'python', 'php', 'C#', 'C++']
    },
    {
        nome: 'Caio',
        idade: 30,
        linguagens: ['go', 'php', 'C#', 'C++']
    }
]


let htmlClientes = ''

for(let cliente of clientes){

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }
 
    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b><br>
            <ul>
              ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes