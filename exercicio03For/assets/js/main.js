const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (const elemento of elementos) {
    const { tag, texto } = elemento

    const tagCriada = document.createElement(tag)
    const conteudo = document.createTextNode(texto) // ou tagCriada.innerHTML(texto) ou tagCriada.innerText(texto) e n precisaria da linha abaixo

    tagCriada.appendChild(conteudo)
    div.appendChild(tagCriada)
}

container.appendChild(div)