const elementos =[
    {tag: 'p', texto:'Acerte em tudo que puder acertar. Mas não se torture com seus erros. '},
    {tag: 'div', texto:'A coragem não é ausência do medo; é a persistência apesar do medo.'},
    {tag: 'footer', texto:'A persistência é o caminho do êxito. '},
    {tag: 'section', texto:'Quantas coisas perdemos por medo de perder. '},
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)
