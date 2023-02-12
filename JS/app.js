function entrar(){
    alert("Bienvenido a USD Exchanges Argentina ");
    let edad = parseInt(prompt("Ingrese su edad: ")); 
    while(isNaN(edad)){
        edad = parseInt(prompt("numero invalido, vuelva a ingresar su edad: "));
    }
    if (edad >= 18) {
        edadArray.push(edad);
    } else {
        alert("Volve cuando seas mayor de edad");
    }
}

function menu() {
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Comprar dolares \n 2) Vender dolares \n 3) Consultar cotizacion de monedas \n 4) Salir" ));
    return opcion;
}

//Función para comprar dolares: 

function Comprar() {
    let nombre = prompt("Ingresar nombre:");
    let apellido = prompt("Ingrese apellido:");
    let cantidad = parseInt(prompt("Ingresar la cantidad de dolares que quiere comprar: "))
    while(isNaN(cantidad)){
        cantidad = parseInt(prompt("cantidad no valida, volver a ingresar monto por favor: "));
    }
    console.log(nombre, apellido, cantidad)
    alert("Muchas gracias " + nombre + " usted debera pagar " + cantidad * 350 + " devaluadisimos pesos argentinos ")
}

//Función para vender dolares: 

function Vender() {
    let nombre = prompt("Ingresar nombre:");
    let apellido = prompt("Ingrese apellido:");
    let cantidad = parseInt(prompt("Ingresar la cantidad de dolares que quiere vender: "))
    while(isNaN(cantidad)){
        cantidad = parseInt(prompt("cantidad no valida, volver a ingresar monto por favor: "));
    }
    console.log(nombre, apellido, cantidad)
    alert("Muchas gracias " + nombre + " usted recibira " + cantidad * 350 + " devaluadisimos pesos argentinos ")
}

function Cotizacion() {
    let cantidad = parseInt(prompt("1usd = $350arg \n 1) Ingrese la cantidad de dolares que quiere tasar en pesos arg: "))
    while(isNaN(cantidad)){
        cantidad = parseInt(prompt("cantidad no valida, volver a ingresar monto por favor: "));
    }
    alert(cantidad + " usd " + " es igual a " + cantidad * 350 + " pesos arg ")
}
//Función para salir del programa: 

function salir() {
    alert("Gracias por confiar en USD Exchanges");
}

const edadArray = [];

entrar();
console.log(edadArray)
if (edadArray[0] >= 18) {
    let opcion = menu();

    switch(opcion) {
        case 1: 
            Comprar();
            break;
        case 2: 
            Vender();
            break;        
        case 3: 
            Cotizacion();
            break;
        case 4: 
            salir();
            break;
        default: 
            alert("Opcion invalida. Recarga la pagina para volver a empezar.")
            break;
    }

}