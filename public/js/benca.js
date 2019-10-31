const bencaBtn = document.querySelector('#bencaForm')
const bencaTexto = document.querySelector('#bencaTexto')

bencaTexto.textContent = ''

bencaBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    bencaTexto.textContent = 'vc foi abensoado'
})