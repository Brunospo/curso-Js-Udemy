const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')

const arrayDePessoas = []

function recebeEventoForm(evento){
    evento.preventDefault()

   const name = form.querySelector('.name')
   const lastName = form.querySelector('.lastName')
   const height = form.querySelector('.height')
   const weight = form.querySelector('.weight')

   arrayDePessoas.push({
       name: name.value,
       lastName: lastName.value,
       height: height.value,
       weight: weight.value
   })

   console.log(arrayDePessoas)

   resultado.innerHTML+= `<p>${name.value} ${lastName.value} ${height.value} ${weight.value} </p>`
}

form.addEventListener('submit', recebeEventoForm)