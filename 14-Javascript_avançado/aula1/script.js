

/*

SCOPE - ESCOPO


GLOBAL
LOCAL

- O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIAVEL

- AS FUNÇÕES NO JS CRIAM O SEU PRÓPRIO ESCOPO

- AS VARIAVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA


*/

let a = 123

function teste() {
    console.log(a)
}

teste()