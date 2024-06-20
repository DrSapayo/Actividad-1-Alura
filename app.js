let limiteUsuario = parseInt(prompt('digite cual es el limite de los numeros generados: '));
let numeroSecreto = Math.floor(Math.random()*limiteUsuario)+1;
let numeroUsuario = parseInt(prompt(`Me indicas un numero por favor del 1-${limiteUsuario}, numero de intento: 1`));
console.log(numeroUsuario);
let contador = 2;
let maxContador = 4;

if(limiteUsuario == NaN || limiteUsuario == null){
    limiteUsuario = parseInt(prompt('No es un numero, digite un numero:'))
}

if(numeroUsuario == numeroSecreto){
    alert('numero correcto')
}
else {while (numeroUsuario != numeroSecreto) {
    if(numeroUsuario > numeroSecreto){
        alert('el numero es menor');
        numeroUsuario = parseInt(prompt(`digite un numero n° de intento: ${contador}`));
        contador ++;
    }else if (numeroUsuario < numeroSecreto){
        alert('el numero es mayor');
        numeroUsuario = prompt(`digite un numero n° de intento: ${contador}`);
        contador ++;
    }
    if(numeroUsuario == numeroSecreto){
        alert(`numero correcto. numero de intentos: ${contador-1}`)
        break;
    }

    if(contador > maxContador){
        alert(`Numero maximo de intentos alcanzado, el numero era ${numeroSecreto}.`)
        break;
    }
}
} 