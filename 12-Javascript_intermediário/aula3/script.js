

//SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

//SELETOR POR TAG
document.querySelector('a').innerText = '<b>teste ancora</b>'


// SELECIONANDO MAIS DEE 1 IEM
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento) { // funcão anonima / callback
    elemento.innerHTML = 'teste'
}) 


// SELECIONANDO MAIS DE 1 ITEM POR CLASS
let boxes = document.querySelectorAll('.box')


boxes.forEach(function(box, index) {
    box.innerHTML = 'box' + (index + 1)
})