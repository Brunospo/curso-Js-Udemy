const form = document.querySelector('.form')
const resultadoText = document.querySelector('.resultado')

function calculaIMC(event){
    event.preventDefault()
    
    const peso = Number(form.querySelector('#peso').value)
    const altura = Number(form.querySelector('#altura').value)
    let resultado = ''

    if (!peso){
        resultadoText.innerHTML = `<p style= "background:rgb(255,150,150); padding: 10px">Peso inválido</p>`
        return;
    }

    if (!altura){
        resultadoText.innerHTML = `<p style= "background:rgb(255,150,150); padding: 10px">Altura inválida</p>`
        return;
    }
    
    const imc = peso/ (altura * altura)

    
        if (imc < 18.5){
            resultado = 'Abaixo do peso'
        } else if(imc >= 18.5 && imc <= 24.9){
            resultado = 'Peso normal'
        } else if(imc >= 25 && imc <=29.9){
            resultado = 'Sobrepeso'
        } else if(imc >= 30 && imc <= 34.9){
            resultado = 'Obesidade grau 1'
        } else if(imc >= 35 && imc <= 39.9){
            resultado = 'Obesidade grau 2'
        } else{
            resultado = 'Obesidade grau 3'
        }
    
        resultadoText.innerHTML = `<p style= "background:rgb(109,255,182); padding: 10px">Seu IMC é ${imc.toFixed(2)} (${resultado})</p>`

}

form.addEventListener('submit', calculaIMC)