const relogio = document.querySelector('.relogio')
const botaoIniciar = document.querySelector('.iniciar')
const botaoPausar = document.querySelector('.pausar')
const botaoZerar = document.querySelector('.zerar')

let horas = 0
let minutos = 0
let segundos = 0

botaoIniciar.addEventListener('click', () => {
    const idInterval = setInterval(() => {
        segundos++
        relogio.innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
    
        if (segundos === 59){
            segundos = 0
            minutos++
        }
    
        if (minutos === 59){
            segundos = 0
            minutos = 0
            horas++
        }
    
        if (horas === 24){
            segundos = 0
            minutos = 0
            horas = 0
        }
    }, 1000)

    botaoPausar.addEventListener('click', () => {
        clearInterval(idInterval)
        relogio.style.color = 'red'
    })

    botaoZerar.addEventListener('click', () => {
        clearInterval(idInterval)
        segundos = 0
        minutos = 0
        horas = 0
        relogio.innerHTML = `00:00:00`
        relogio.style.color = 'black'
    })

    relogio.style.color = 'black'
})