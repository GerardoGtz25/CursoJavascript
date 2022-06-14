
// TAREA 1 FUNCIONES VARIABLES

// CREA TRES FUNCIONES PARA CALCULAR EL AREA DE UN CUADRADO, DE UN RECTANGULO Y UN TRIANGULO
// CADA FUNCION DEBE DE SER INDEPENDIENTE
// DECLARA LAS VARIABLES Y NOMBRAR SEGUN SU UTILIDAD EJEMPLO:
// ladocuadrado etc
// CREAR UN FUNCION QUE IMPRIMA LOS VALORES

let ladocuadrado = 8;
let ladoRectangulo1 = 15;
let ladoRectangulo2 = 80;
let baseTriangulo = 30;
let alturaTriangulo = 47;

//cuadradrArea
function areaCuadrado(valor1,valor2) {
    return (valor1 * valor2);
}

console.log(`El área del cuadrado es: ${areaCuadrado(2,5)}`);

//rectanguloArea
function areaRectangulo(lado1, lado2) {
    return (lado1 * lado2);
}

console.log(`El área del rectangulo es: ${areaRectangulo(258, 210000)}`);

//trianguloArea
function areaTriangulo(base, altura) {
    return ((base * altura)/2);
}

console.log(`El área del triangulo es: ${areaTriangulo(10,10)}`);
