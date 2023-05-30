
const encrBtn = document.getElementById('encr')
const copiarBtn = document.getElementById('copiar')
const deseBtn = document.getElementById('dese')


function mostarEnPanel(texto) {

    document.getElementById('mensaje').style.display = "none"
    document.getElementById('copiar').style.display = "block"
    document.getElementById('resultado').style.display = "block"
    document.getElementById('resultado').innerText = texto

}


function encriptar(texto) {

    const arrayTexto = texto.split('')

    let textoMostrar = ''

    for (let index = 0; index < arrayTexto.length; index++) {
        
        if (arrayTexto[index] === 'a'){
            textoMostrar += 'ai'
        }else if (arrayTexto[index] === 'e'){
            textoMostrar += 'enter'
        }else if (arrayTexto[index] === 'i'){
            textoMostrar += 'imes'
        }else if (arrayTexto[index] === 'o'){
            textoMostrar += 'ober'
        }else if (arrayTexto[index] === 'u'){
            textoMostrar += 'ufat'
        }else{
            textoMostrar += arrayTexto[index]
        }
    }

    mostarEnPanel(textoMostrar)

}

function desencriptar (texto) {
    
    let textoMostrar = ''

    textoMostrar = texto.replaceAll('ai', 'a')
    textoMostrar = textoMostrar.replaceAll('enter', 'e')
    textoMostrar = textoMostrar.replaceAll('imes', 'i')
    textoMostrar = textoMostrar.replaceAll('ober', 'o')
    textoMostrar = textoMostrar.replaceAll('ufat', 'u')

    mostarEnPanel(textoMostrar)

}


encrBtn.addEventListener('click',function(){
    const leerTexto = document.getElementById('texto')    
    encriptar(leerTexto.value)
})

copiarBtn.addEventListener('click',function(){
    const textoCopiado = document.getElementById('resultado').select()
    document.execCommand('copy')
})

deseBtn.addEventListener('click',function(){
    const leerTexto = document.getElementById('texto')    
    desencriptar(leerTexto.value)
})


