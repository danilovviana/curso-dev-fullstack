
let digtab = prompt ('Digite qual tabuada você quer saber:')

for (let tabuada = 1; tabuada <= 10; tabuada++ ) {
  let result = digtab * tabuada;
  let mensagem = `${digtab} x ${tabuada} = ${result} <br>`

  document.write(mensagem)
}

