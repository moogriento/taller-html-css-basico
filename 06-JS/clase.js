// num = num + 1 => num++;
// 2, 4, 6, 8
var impresion = '';

for(var num = 1; num <= 50; num++) {
  if (num % 2 === 0) {
    console.log('NUM ' + num);
    console.log('impresion ANTES ' + impresion);
    impresion = impresion + ' ' + num + ',';
    console.log('impresion AHORA ' + impresion);
    console.log('---------------------');
    // 1. impresion = ' 2, '
    // 2. impresion = ' 2, 4, '
    // 3. impresion = ' 2, 4, 6,'
  }
}

// console.log(impresion);

// comparación en JS

// === COMPARA EL VALOR Y EL TIPO
// == COMPARA EL VALOR

var nota1 = '15';
var nota2 = 15;

if (nota1 === nota2) {
  console.log('ES IGUAL');
} else {
  console.log('ES DIFERENTE')
}




var notas = [14, 8, 17, 11, 6, 13, 20, 15, 6];
var promedio = 0;
var sumaNotas = 0;
var totalNotas = notas.length; // cantidad de elementos

for (var i = 0; i < totalNotas; i++) {
  var nota = notas[i];
  sumaNotas = sumaNotas + nota;
}

promedio = sumaNotas / totalNotas;

// redondear decimales 
// .toFixed([CANTIDAD DECIMALES])
console.log('promedio es ' + promedio.toFixed(2));




var colores = ['azul', 'rojo', 'amarillo', 'verde', 'celeste', 'blanco', 'escarlata'];
var colorPreguntar = 'rojo';
var existe = false; // variable booleana (verdad/falso)

for (var i = 0; i < colores.length; i++) {
  var color = colores[i];
  
  console.log('color a evaluar ' + color);
  
  if (color === colorPreguntar) {
    existe = true;
    break; // salir de la iteración (FOR)
  }
}


// existe
// if (existe) {}
if (existe === true) {
  console.log('EXISTE EL COLOR');
} else {
  console.log('NO EXISTE EL COLOR');
}



var colores = ['azul', 'rojo', 'amarillo', 'verde', 'celeste', 'blanco', 'escarlata', 'amarillo'];
// retorna el índice donde se encuentra el valor
var indice = colores.indexOf('amarillo');
// si no existe el valor, entonces retorna -1

if (indice !== -1) {
  console.log('existe');
} else {
  console.log('no existe');
}


var notas = [14, 8, 17, 11, 6, 13, 20, 15, 6];
var promedio = 0;
var sumaNotas = 0;
var totalNotas = notas.length; // cantidad de elementos
var i = 0;

while (i < totalNotas) {
  var nota = notas[i];
  sumaNotas = sumaNotas + nota;
  i++; // i = i + 1;
}

promedio = sumaNotas / totalNotas;

// redondear decimales 
// .toFixed([CANTIDAD DECIMALES])
console.log('promedio es ' + promedio.toFixed(2));