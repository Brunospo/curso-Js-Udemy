const titulo1 = document.querySelector('h1')
const titulo2 = document.querySelector('h2')

const data = new Date()
const dataFormatada = data.toLocaleString('pt-BR', {dateStyle: 'full'})
const horaFormatada = data.toLocaleString('pt-BR', {timeStyle: 'short'})

titulo1.innerHTML = dataFormatada
titulo2.innerHTML = horaFormatada
