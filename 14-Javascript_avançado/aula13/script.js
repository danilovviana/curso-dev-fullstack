

/*

FETCH API 

*/

function transformarEmJson(response) {
  return response.json()

}

function exibirNaTela(dados) {
  console.log(dados)
}

function exibirErro () {
  console.log('ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
  method: 'POST',
  headers: {}
}

botaoCarregar.onclick = () =>
  fetch('https://jsonplaceholder.typicode.com/photos', configs)
    .then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro)



