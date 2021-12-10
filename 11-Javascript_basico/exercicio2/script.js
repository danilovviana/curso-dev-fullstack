

let inputNome = prompt('Digite seu nome:')
let inputIdade = prompt('Digite sua idade:')


if (idade >=18) {
    document.write(`Olá ${inputNome}, Você é MAIOR de idade!`)
} else if (idade <18) {
    document.write(`Olá ${inputNome}, Você é MENOR de idade!`)
} 

if (nome === 'Thomas Anderson' || nome === 'thomas anderson' || nome === 'Thomas anderson' || nome === 'thomas Anderson' && idade >=18) {
    document.write(`Você é personagem do filme The Matrix!`)
}