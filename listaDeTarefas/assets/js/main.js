const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criarLi(){
    return document.createElement('li')
}

function limparInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criarTarefa(tarefa){

    if (!tarefa){
        return
    }

    const li = criarLi()

    li.innerText = tarefa
    tarefas.appendChild(li)
    
    limparInput()
    criarBotaoApagar(li)
    salvarTarefa()
}

function criarBotaoApagar(li){
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')

    //add um espaço entre o texto do li e o botão
    li.innerText +=' '
    li.appendChild(botaoApagar)
}

function salvarTarefa(){
    const conjuntoDeLi = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
   for (const tarefa of conjuntoDeLi) {
       const tarefaTexto = tarefa.innerText.replace('Apagar', '').trim()
       listaDeTarefas.push(tarefaTexto)
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas)

   localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (const tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}

btnTarefa.addEventListener('click', () => {criarTarefa(inputTarefa.value)})

//criar uma tarefa ao pressionar o Enter no input
inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        criarTarefa(inputTarefa.value)
    }
})

document.addEventListener('click', (e) => {
    const elemento = e.target

    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove()
        salvarTarefa()
    }
})

adicionaTarefasSalvas()