// TAREA 1 FUNCIONES VARIABLES

// CREA TRES FUNCIONES PARA CALCULAR EL AREA DE UN CUADRADO, DE UN RECTANGULO Y UN TRIANGULO
// CADA FUNCION DEBE DE SER INDEPENDIENTE
// DECLARA LAS VARIABLES Y NOMBRAR SEGUN SU UTILIDAD EJEMPLO:
// ladocuadrado etc
// CREAR UN FUNCION QUE IMPRIMA LOS VALORES

const ladoCuadrado = 2;

const ladoRectangulo1 = 3;
const ladoRectangulo2 = 2;

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function imprimirValor(resultado) {
  console.log(resultado);
}

// const resultado = calcularAreaCuadrado(ladoCuadrado);
// imprimirValor(resultado);
imprimirValor(calcularAreaCuadrado(ladoCuadrado));
