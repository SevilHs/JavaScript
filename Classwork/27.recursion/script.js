// Task 1

function func1(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
  return num>0 ? num* func1(num-1): 1
}

console.log(func1(4));
console.log(func1(5));
console.log(func1(0));
console.log(func1(-1));

// Task 2
function func2(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i = i + 2) {
//     result = result * i;
//   }
//   return result;
return num>1 ? num*func2(num-2) : 1
}

console.log(func2(5));
console.log(func2(9));
console.log(func2(1));

// Task 3
let arr1 = [];
function sumArray(arr) {
  // return (arr.flat(Infinity)).reduce((a,b)=>a+b)
  //    return arr.reduce((a,b)=>a+b,0).split(',').reduce((a,b)=>a + Number(b),0)
  return arr.reduce(
    (acc, curr) => (Array.isArray(curr) ? acc + sumArray(curr) : acc + curr),
    0
  );
}

console.log(sumArray([4, [2, [1]], 8]));
