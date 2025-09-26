let primerNumero="";
let segundoNumero="";
let opCode=""


function elegirNumero(Num1){
    primerNumero+=Num1
    document.getElementById("texto").textContent = primerNumero;
}



function signos(signo){
segundoNumero = primerNumero
primerNumero="";
opCode=signo
document.getElementById("texto").textContent = signo;

}

function igual(){
    switch (opCode){
        case "+":
        primerNumero = Number(segundoNumero) + Number(primerNumero)
        break;
        case "-":
            primerNumero = segundoNumero - primerNumero
        break;
        case "%":
            primerNumero = dividir(segundoNumero,primerNumero)
        break;
        case "x":
            primerNumero*=segundoNumero
            //primerNumero = primerNumero * segundoNumero
        break;
        default:
    }
    document.getElementById("texto").textContent = primerNumero;
}

function dividir(segundoNumero , primerNumero){
    if(primerNumero==0){
        return "no se puede dividir por 0"
    }
    return segundoNumero / primerNumero
}

let tengoHmabre=false

let tengoSueño=true

if(tengoHmabre || tengoSueño){
    console.log("voy a comer y me voy a dormir")
}
else{
    console.log("no como ni me duermo")
}

const punto=()=>{
    
    if(primerNumero==""){
        primerNumero+="0.";
        document.getElementById("texto").textContent = primerNumero;
    }

    if(!primerNumero.includes(".")){
        primerNumero+=".";
        document.getElementById("texto").textContent = primerNumero;
    }
}

//variables y constantes

let primerVariable;
const primerConstante="holahola holahola holahola";

//estructura de datos
let palos = ["espada", "copa", "basto", "oro"];
let cartas =[];
let numeros =[-30, 5, 7, 8, 1, 2, 57, 3, 8, -33, 13, 33]

for(let i=0;i<palos.length;i++){
    for(let j=1;j<=12;j++){
        if(j!==9 && j!==8){
            cartas.push( j + " "+palos[i]);
        }
    }
}

console.log(cartas)
let mayor=numeros[0];
for(let i=i;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor=numeros[i]
    }
}
console.log(mayor)

let persona = {
    //atributos
    colordepelo:"castaño",
    edad:"22",
    nombre:"gabriel",
    direccion:"sarmiento y chacabuco",
    nacionalidad:"argentina",
    //metodos
    caminar(){
        console.log("estoy caminando")
    },
    clase(){
        console.log("estoy en clase")
    }
}

persona.caminar()
console.log(persona.nombre)
persona.nombre="pepe"

let primerPaso="";
let segundoPaso="";
let tercerPaso=""

function suma(paso1){
primerPaso+=paso1
document.getElementById("resultado").textContent = primerPaso
}

