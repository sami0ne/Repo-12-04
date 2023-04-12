console.log("Hola Mundo");

alert("ERROR 404");

let variableUno=("Hola")
let variableDos=("pipipipipi ")
let miVariable = (":)")

console.log(variableUno + " " + variableDos);

alert(variableUno + " " + variableDos);

const constante = 10;

let numeroUno = 50;
let numeroDos = 20;

let result = numeroUno + numeroDos
console.log("La suma de dos numeros es:" + result);

var numeroNormal  = prompt("Ingrese un numero");
var numeroAnormal  = prompt("Ingrese un numero");

let resultado = numeroNormal + numeroAnormal

document.write("Numero 1: " + numeroNormal+ "<br>");
document.write("Numero 2: " + numeroAnormal+ "<br>");

let var1 = 10;
let var2 = "10";

if (var1 == var2){
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

if (var1 > var2){
    console.log("Es mayor");
}
else{
    console.log("Es menor");
}

if (var1 > var2 && var1 > 15){
    console.log("Es mayor");
}
else{
    console.log("Es menor");
}

if (var1 > var2 || var1 > 5){
    console.log("Es mayor 2.0");
}
else{
    console.log("Es menor 2.0");
}

if (var1 < var2){
    console.log("Es menor var1");
}
else if (var1 > 20){
    console.log("Es mayor a 20");
}
else{
    console.log("No se cumplio");
}


function miFuncion(nomUser){
    console.log("Mi primera funcion", nomUser );
}

miFuncion();

// 1 = true ---- 0 = false
let condicional = true;

if (condicional == 0){
    console.log("Es verdadera");
}else{
    console.log("Es falso");
}

function eventBlur(){
    console.log("Evento blur");
}

function eventFocus(){
    console.log("Evento Focus")
}

function eventClick(){
    console.log("Evento Click")
}

function eventKeyDown(){
    console.log("Evento Key Down")
}

function eventKeyUp(){
    console.log("Evento Key Up")
}

function eventDblClick(){
    console.log("Evento Doble Click")
}

function eventChange(){
    console.log("Evento Change")
}

function obtenerValorinput(){
    let var1 = document.getElementById("txtNumero2").value;
    console.log("Valor input: ", var1);
    console.log("Valor variable", variableUno);
    console.log("Este es el valor de la variable que esta en la funcion: ", miVariable);
}

function eventBlur2(){
    //console.log("Evento blur");
    obtenerValorinput();
}

document.getElementById("ocultar").style.display = "none";

function pass(){
    let input = document.getElementById("txtContrasena");

    if(input.type = "password"){
        input.type = "text";
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";
    }else{
        input.type = "password"
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
    }
}



// == compara el valor
// === compara valor y tipo de dato
// !== compara que no son iguales los valores
// !=== compara que no son iguales los valores y el tipo de dato
// && es como un "and" es para que cumpla ambas condiciones
// || es como un "or" es una o la otra 


//comentario de una linea

/* comentario de varias lineas */