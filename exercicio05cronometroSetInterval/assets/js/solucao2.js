const relogio = document.querySelector('.relogio')

let segundos = 0;
let idInterval;

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    //o UTC é para remover o '-3h' do timeZone do brasil
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'}) 
}

function iniciaRelogio(){
    //para evitar duas ou mais instancias do setInterval
    clearInterval(idInterval)

    //revover a classe pausado
    relogio.classList.remove('pausado')

    idInterval = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

function zeraRelogio(){
    //parar o intervalo
    clearInterval(idInterval)

    relogio.classList.remove('pausado')

    segundos = 0
    relogio.innerHTML = criaHoraDosSegundos(segundos)
}

document.addEventListener('click', (event) => {
    const elemento = event.target

    if (elemento.classList.contains('iniciar')) {
        iniciaRelogio()
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(idInterval)

        relogio.classList.add('pausado')
    }

    if (elemento.classList.contains('zerar')) {
        zeraRelogio()
    }
})