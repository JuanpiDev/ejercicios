let saldo = 5000;

clave = +prompt(`Bienvenido al cajero automatico, porfavor ingrese su clave`);

function VolverAmenu(){
    if (clave === 123456){
        switch(prompt(`Que operacion desea realizar? \n1. Retirar \n2. Consultar saldo \n 3. Depositar \n.4. Transferir \n5. Salir`)){
            case "1": retirar();
            break;
            case "2": MostrarSaldo();
            break;
            case "3": Depositar();
            break;
            case "4": Transferir();
            break;
            case "5": Salir();
            break;
            default:
                alert("Opcion no Valida");
        }
    } else{
        alert("Clave incorrecta");
    }
}

function retirar(){
    saldo = saldo - +prompt("Ingresa el monto que deseas retirar");

    alert("Su retiro ha sido realizado con exito!");

    VolverAmenu();
}

function MostrarSaldo(){
    alert(`Su saldo actual es ${saldo}`)

    VolverAmenu()
}

function Depositar(){
    saldo = saldo + +prompt(`Ingrese el monto que desea depositar`);

    alert(`Tu deposito ha sido realizado con exito!`);

    VolverAmenu();
}

function Transferir(){
    saldo = saldo - +prompt("Ingresa el monto que deseas transferir");

    alert("Su transferencia ha sido realizada con exito!");

    VolverAmenu();
}

function Salir(){
    alert("Nos vemos, que tenga un dia!");
}

console.log(VolverAmenu());



