let peso = prompt("Ingresa tu peso");

let altura = prompt("Ingresa tu altura");

function formula(){
    return peso / (altura * altura);
}

const IMC = formula().toFixed();

IMC < 18.5 ? alert(`Tu Indice de Masa Corporal es ${IMC}, Estas bajo de peso`) : IMC >= 18.5 && IMC <= 24.9 ? alert(`Tu Indice de Masa Corporal es ${IMC}, Tu peso es normal`) : IMC >= 25 && IMC <= 29.9 ? alert(`Tu Indice de Masa Corporal es ${IMC}, Tienes sobrepeso`) : alert(`Tu Indice de Masa Corporal es ${IMC}, Tienes obesidad`);