////////// 1 ////////

const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];

function getRandomLetter(x) {
  return x[Math.floor(Math.random() * x.length)];
}

console.log(getRandomLetter(arr1));

////////// 2 /////////

const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum = 0;

function calcSum(y) {
  for (const item of y) {
    if (item % 2 == 0) {
      sum += item;
    }
  }
  return sum;
}

console.log(calcSum(arr2));

////////// 3 //////////

const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
const newArr = [];

let getPositiveNum = function (z) {
  for (let i = 0; i < z.length; i++) {
    newArr.push(Math.abs(z[i]));
  }
  return newArr;
};

console.log(getPositiveNum(arr3));

//////// 4 ///////

const arr4 = [4, 9, 16, 18, 30, 36, 50];
const newArr2 = [];

let calcSquareRoot = (h) => {
    for (let i = 0; i < h.length; i++) {
        newArr2.push(Math.sqrt(h[i]))
    }
    return newArr2 ;
};

console.log(calcSquareRoot(arr4));
