
let contador = document.querySelector('.contador')

let count = 0


let intervalor = setInterval(function() {
  count++
  contador.innerText = count
}, 1)


let botaoPausar = document.querySelector("#botaoPausar")


botaoPausar.onclick = function() {
   clearInterval(intervalor)
}
