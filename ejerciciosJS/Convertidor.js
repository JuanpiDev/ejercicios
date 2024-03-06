let opciones = prompt(`Esoge la opcion de conversion:
1- Celcius - Fahrenheit
2- Fahrenheit - Celcius
3- Kelvin - Celcius
4- Celcius - Kelvin
`);

let grados = prompt("Ingrese la cantidad de grados que desea convertir");

function convertidorCF(){
    return grados * 1.8 + 32
}

function convertidorFC(){
    return (grados - 32) / 1.8
}

function convertidorKC(){
    return grados - 273.15
}

function convertidorCK(){
    return grados + 273.15
}

let convertidor1 = convertidorCF();
let convertidor2 = convertidorFC();
let convertidor3 = convertidorKC();
let convertidor4 = convertidorCK();



/*if (opciones === "1"){
    alert(`${grados} Celsius son ${convertidor1} Fahrenit`);
} else if (opciones === "2"){
    alert(`${grados} Fahrenit son ${convertidor2} Celsius`);
} else if (opciones === "3"){
    alert(`${grados} Kelvin son ${convertidor3} Celsius`);
} else if (opciones === "4") {
    alert(`${grados} Celsius son ${convertidor4} Kelvin`);
} else {
    alert("Opcion no valida");
}*/

switch(opciones){
    case "1": alert(`${grados} Celsius son ${convertidor1} Fahrenit`);
    break;
    case "2": alert(`${grados} Fahrenit son ${convertidor2} Celsius`);
    break;
    case "3": alert(`${grados} Kelvin son ${convertidor3} Celsius`);
    break;
    case "4": alert(`${grados} Celsius son ${convertidor4} Kelvin`);
    break;
    default: alert("Opcion no valida")
    }
