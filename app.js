let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10

console.log(numeroSecreto)

function asignarElementoHTML(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    //getElementById('xxx') Selecciona el elemento con el Id especificado
    console.log(intentos)
    console.log(numeroUsuario)
    console.log(numeroSecreto == numeroUsuario)
    console.log(typeof(numeroSecreto == numeroUsuario)) 


    if(numeroSecreto == numeroUsuario){
        asignarElementoHTML('p',`Adivinaste el número en ${intentos} ${intentos<=1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if(numeroSecreto < numeroUsuario){
        asignarElementoHTML('p','Sigue intentando. El número es menor')
    }else if(numeroSecreto > numeroUsuario){
        asignarElementoHTML('p','Sigue intentando. El número es mayor')
    }
    intentos++
    limpiar()
}

function limpiar(){
    //Esto se utilisa para limpiar la caja
    document.getElementById('valorUsuario').value = "";
}

function condicionesIniciales() {
    asignarElementoHTML('h1','Juego')
    asignarElementoHTML('p',`Ingrese un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumero()
    intentos = 1
}

function generarNumero() {
    let numeroGenerado = parseInt(Math.floor((Math.random()*numeroMaximo))+1);
    
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoHTML('p','Ya se sortearon todos los numeros posibles')
        listaNumerosSorteados = []
        reiniciarJuego()
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero()
            //Recursividad
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }

    
}

function reiniciarJuego() {
    limpiar()
    condicionesIniciales()
    document.getElementById('reiniciar').setAttribute('disabled',true)

}

condicionesIniciales()


