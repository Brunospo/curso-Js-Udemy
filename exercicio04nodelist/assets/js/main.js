const paragrafo = document.querySelector('.paragrafos')
const conjuntoDeP = paragrafo.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const corBgBody = estilosBody.backgroundColor

for (const p of conjuntoDeP) {
    p.style.backgroundColor = corBgBody
    p.style.color = "#fff"
}