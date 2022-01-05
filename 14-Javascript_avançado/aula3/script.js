

/*

ARROW FUNCTIONS

SURGIU NA ES6 - VERSÃO DO JAVASCIPT

AS FUNÇÕES DA SETA NOS PERMITEM ESCREVER UMA SINTAXE DE FUNÇÕES MAIS CURTA.

*/

// retorno implicito
const soma = (param1, param2) => param1 + param2

const resultado = soma(11, 2)

console.log(resultado)

// quando tem 1 parametro, pode remover os parenteses 
const teste = param1 => param1

console.log(teste('ok'))


const botao = document.querySelector('#botao')

botao.onclick = function() {
    console.log(this)
}