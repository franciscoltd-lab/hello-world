class Calculadora{

    constructor(){

    }

    sumar(a, b){
        return parseInt(a) + parseInt(b);
    }

    restar(a, b){
        return parseInt(a) - parseInt(b);
    }

    multiplicar(a, b){
        return parseInt(a) * parseInt(b);
    }

    dividir(a, b){
        return parseInt(a) / parseInt(b);
    }

    exponencial(a, exp){
        return a**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación desea realizar?");
let operacion = parseInt(prompt("1.-Suma, 2.-Resta, 3.-División, 4.-Multiplicación, 5.-Exponencial, 6.-Raíz Cuadrada, 7.-Raíz Cubica"));

if(operacion===1){
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");

    let resultado = calculadora.sumar(num1, num2);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===2){
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");

    let resultado = calculadora.restar(num1, num2);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===3){
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");

    let resultado = calculadora.multiplicar(num1, num2);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===4){
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");

    let resultado = calculadora.dividir(num1, num2);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===5){
    let num1 = prompt("Ingresa el primer número");
    let exp = prompt("Ingresa el exponente");

    let resultado = calculadora.exponencial(num1, exp);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===6){
    let num1 = prompt("Ingresa el número que desea raíz cuadrada");

    let resultado = calculadora.raizCuadrada(num1);

    alert(`Tu resultado es ${resultado}`);
}
else if(operacion===7){
    let num1 = prompt("Ingresa el número que desea raíz cubica");

    let resultado = calculadora.raizCubica(num1);

    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("No es una opción válida!");
}