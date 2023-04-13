//1 Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parImpar(num) {
  if (num % 2 == 0) {
    console.log(`Este número es un número par`);
  } else {
    console.log(`Este número es un número impar`);
  }
}

parImpar(1);

//2 Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function numMayor(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log(`${num1} y ${num2} son iguales`);
  }
}

numMayor(2,2);

//3 Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiploCinco(num) {
  if (num % 5 == 0) {
    console.log(`${num} es múltiplo de 5`);
  } else {
    console.log(`${num} no es múltiplo de 5`);
  }
}

multiploCinco(3);

//4 Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNum(num) {
  for (let i = 0; i <= num; i++) {
    if (i == num + 1) {
      break;
    }
    console.log(`Este número es ${i}`);
  }
}

imprimirNum(10);

//5 Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
 function imprimirString (string, num){

     for (let i = 0; i < num; i++){
      console.log(string)
    }
 }

 imprimirString("Hola",3);

//6 Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
let metal = ["black", "death", "grindcore", "thrash"];
//console.log(metal)
for (let i = 0; i < metal.length; i++) {
  console.log(metal[i]);
}

//7 Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let indiceCinco of numeros) {
  if (indiceCinco == 4) {
    continue;
  }
  console.log(indiceCinco);
}

//8  Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 10

function multiplicar(arrayNumeros, num) {
  for (let i = 0; i < arrayNumeros.length; i++) {
  const resultado = arrayNumeros[i] * num;
  
  console.log(resultado);
  }
}

multiplicar(arrayNumeros, num);
