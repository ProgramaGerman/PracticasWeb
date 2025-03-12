const op1 = document.getElementById("op1");
const op2 = document.getElementById("op3");
const operador = document.getElementById("operador");
const btnCalcular = document.getElementById("Calcular");

btnCalcular.addEventListener("click", calcular);


let resultado = 0;

let operadores = ["+", "-", "*", "/"];

function isnumeric(Valor) {//Lo hice yo
    return !isNaN(parseFloat(Valor)) && isFinite(Valor) ;
    
}

function calcular(){

    if(!isnumeric(op1.value) || !isnumeric(op2.value)){

        alert( "Valores no numéricos");
        document.getElementById("op1").value = "";
        document.getElementById("op3").value = "";
        document.getElementById("operador").value = "";
        return;
    }

    if(operadores.includes(operador.value)){
            switch (operador.value) {
             case "+":
                    resultado = Number(op1.value) + Number(op2.value);
                   break;
             case "-":
                    resultado = Number(op1.value) - Number(op2.value);
                   break;
            case "*":
                resultado = Number(op1.value) * Number(op2.value);
                break;
            case "/":
                resultado = Number(op1.value) / Number(op2.value);
                break;
            default:
                break;
            }

   }else{
    resultado = "Valor inválido";
   }
   document.getElementById("resultado").innerText = "Resultado: " + resultado;
}