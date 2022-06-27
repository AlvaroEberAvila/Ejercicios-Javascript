let num1;
let num2;
function suma(num1, num2) {
  let sumas = num1 + num2;
  document.write("La suma es: " + sumas + "<br>");
}

function resta(num1, num2) {
  let restas = num1 - num2;
  document.write("La resta es: " + restas + "<br>");
}

function multi(num1, num2) {
  let multis = num1 * num2;
  document.write("La multi es: " + multis + "<br>");
}

function division(num1, num2) {
  let divisio = num1 / num2;
  document.write("La division es: " + divisio + "<br>");
}

function potencia(num1, num2) {
  let pow = Math.pow(num1, 2);
  let pow2 = Math.pow(num2, 2);
  document.write("El num1 elevado a 2 es: " + pow + "<br>");
  document.write("El num2 elevado a 2 es: " + pow2 + "<br>");
}

function raizcuadrada(num1, num2) {
  let sqrt = Math.sqrt(num1);
  let sqrt2 = Math.sqrt(num2);
  document.write("La raiz cuadrada de num1 es: " + sqrt + "<br>");
  document.write("La raiz cuadrada de num2 es: " + sqrt2 + "<br>");
}

function raizcubica(num1, num2) {
  let cbrt = Math.cbrt(num1);
  let cbrt2 = Math.cbrt(num2);
  document.write("La raiz cubica de num1 es: " + cbrt + "<br>");
  document.write("La raiz cubica de num2 es: " + cbrt2 + "<br>");
}

suma(5, 5);
resta(10, 5);
multi(10, 10);
division(4, 2);
potencia(8, 4);
raizcuadrada(6, 3);
raizcubica(9, 7);
