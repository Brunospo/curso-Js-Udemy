const titulo1 = document.querySelector('h1')
const titulo2 = document.querySelector('h2')

function getDayOfWeek(number){
    switch(number){
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return ''    
    }
}

function getMonthName(number){
    switch(number){
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
        default:
            return ''    
    }
}

const data = new Date()
const resultado = `${getDayOfWeek(data.getDay())}, ${data.getDate()} de ${getMonthName(data.getMonth())} de ${data.getFullYear()}`
const hora = `${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}`

titulo1.innerHTML = resultado
titulo2.innerHTML = hora
