// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// ES5
// function arrayUno(arr, num1, num2){
//   var arrayUno = [];
//   for (var i = 1; i < arr.length; i++) {
//     if ((i >= num1) && (i <= num2)) {
//       arrayUno.push(arr[i])
//     }
//   }
//   return arrayUno;
// }
//
// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var a = parseInt(prompt('Inserire un numero') - parseInt(1));
// var b = parseInt(prompt('Inserire un numero maggiore del precedente') - parseInt(1));
//
// console.log(a + 1);
// console.log(b + 1);
//
// console.log(arrayUno(array, a, b));


// ES6
function arrayUno(arr, num1, num2){
  const arrayUno = [];
  for (let i = 1; i < arr.length; i++) {
    if ((i >= num1) && (i <= num2)) {
      arrayUno.push(arr[i])
    }
  }
  return arrayUno;
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let a = parseInt(prompt('Inserire un numero') - parseInt(1));
let b = parseInt(prompt('Inserire un numero maggiore del precedente') - parseInt(1));

console.log(a + 1);
console.log(b + 1);

console.log(arrayUno(array, a, b));
