let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5,
  6, 2, 5, 6, 3, 7, 3, 7,
];

// let arr2=[1,2,3]

////////////////////////////// 1 /////////////////////////




let sum = 0;

function sumOfNumbers(x) {
  x.forEach((item) => {
    sum += item;
  });
  return sum;
}
console.log(sumOfNumbers(arr));
// sum=0
// console.log(sumOfNumbers(arr2));




////////////////////////////// 2 //////////////////////////
console.log("///////////////////////////////////////");




let count = 0;

function func(items) {
  items.map((item) => (item === 5 ? count++ : item));
  return count;
}
console.log(func(arr));



//////////////////////////// 3 ////////////////////////////
console.log("/////////////////////////////////////////");





console.log(Math.max(...arr));

let count2 = 0;

function findMax(y) {
  y.map((item) => (item === Math.max(...y) ? count2++ : item));
  return count2;
}

console.log(findMax(arr));




////////////////////////// 4 /////////////////////////////
console.log("/////////////////////////////////////////");



console.log(arr.find((item) => item % 3 == 2));
console.log(arr.findIndex((item) => item % 3 == 2));
