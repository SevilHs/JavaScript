const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
//1

// const falsyValue= (array)=>{
//     let result=[]
//     for (let i = 0; i < array.length; i++) {
//         if (!array[i]) {
//             result.push(array[i])
//         }
//     }
//     return result
// }

// console.log(falsyValue(arr));

//2

// const stringValues = (array) => {
//   let result=[];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       result.push(array[i]);
//     }
//   }
//   return result
// };
// console.log(stringValues(arr));

//3

// const sliceArr=(array)=>{
//     result=[]
//     for (let i = 3; i <=7; i++) {
//        result.push(array[i])
//     }
//     return result
// }

// console.log(sliceArr(arr));

//4.
// const sumArr = (array) => {
//   let result = 0;
//   for (const item of array) {
//     if (typeof item==='number' && item) {
//         result+= item
//     }
//   }
//   return result
// };

// console.log(sumArr(arr));

//5

// const findLastIndex=(array)=>{
//     let result=[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===8) {
//             result.push(i)
//         }
//     }
//     return Math.max(...result)
// }

// console.log(findLastIndex(arr));

// const findLastIndex=(array)=>{
//     for (let i = array.length; i>=0; i--) {
//         if (array[i]===8) {
//             return i
//         }
//     }
// }

// console.log(findLastIndex(arr));

// 6

// const reverseArr=(array)=>{
//     let result=[]
//     for (let i = array.length-1; i >= 0; i--) {
//         result.push(array[i])
//     }
//     return result
// }

// console.log(reverseArr(arr))

// 7

// 7. Sort 'arrNum' ascending
// const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// const sortArr= (array)=>{
//     let sorting=true
//     while (sorting) {
//         sorting=false
//         for (let i = 0; i < array.length; i++) {
//             if (array[i]> array[i+1]) {
//                 sorting=true
//                 let a= array[i]
//                 array[i]=array[i+1]
//                 array[i+1]=a
//             }
//         }
//     }
//     return array
// }

// console.log(sortArr(arrNum));

// 8. Sort 'arrLetters' ascending
const arrLetters = ["g", "d", "a", "c", "j", "b", "e"];
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// const sortLetters= (array)=>{
//     let sorting=true
//     while (sorting) {
//         sorting=false
//         for (let i = 0; i < array.length; i++) {
//             if (array.join('').codePointAt(i) >array.join('').codePointAt(i+1)) {
//                 sorting=true
//                 let a= array[i]
//                 array[i]= array[i+1]
//                 array[i+1]=a
//             }
//         }
//     }
//     return array
// }

// console.log(sortLetters(arrLetters));

// const sortLetters = (array) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > array[i + 1]) {
//                 sorting = true
//                 let a = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = a
//             }
//         }
//     }
//     return array
// }

// console.log(sortLetters(arrLetters));  

// // let ex=['a','b','f','d']

// // let any=[]
// // for (let i = 0; i < ex.length; i++) {
// //     any.push(ex.join('').codePointAt(i))
// // }
// // console.log(any);

// 9.Flat 'arr9'
// const arr9 = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7, 8, 9],
// ];
// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const flatArr = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         newArr.push(array[i][j])
//     }
//   }
//   return newArr;
// };

// console.log(flatArr(arr9));

// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']

// const sortLetters = (myArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < myArr.length; i++) {
//             if (myArr[i] > myArr[i + 1]) {
//                 sorting = true
//                 let letter = myArr[i]
//                 myArr[i] = myArr[i + 1]
//                 myArr[i + 1] = letter
//             }
//         }
//     }
//     return myArr
// }

// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

console.log("a" > "b");

//3.Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Can't divide by 0!"

// function calculator(num1, operator, num2) {
//     // if (operator === '/' && num2 === 0) {
//     //     return "Can't divide by 0!"
//     // }
//     const oper = {
//         "+": () => num1 + num2,
//         "-": () => num1 - num2,
//         "*": () => num1 * num2,
//         "/": () => num2 ? num1 / num2 : "Can't divide by 0!",
//     }
//     return oper[operator]()

// }

// console.log(calculator(2, "+", 2));  // 4
// // console.log(calculator(2, "*", 2));  // 4
// console.log(calculator(4, "/", 2));  // 2
// console.log(calculator(2, "/", 0));

// if (!Boolean(item))
//     if (!item)
//         if (item === false)

//             if (Boolean(item))
//                 if (item === true)
//                     if (!!item)

//                         !!!!item === Boolean(item)

// let a = 9
// let b = 8
// let [first, second] = [a, b]

// let arr2 = ['Fatime', 'Nermin']
// let [first, second] = ['Fatime', 'Nermin']
// console.log([second, first]);

//Algorithm

// 1.Given a number, return an array containing the two halves of the number.If the number is odd, make the rightmost number higher.

// function numberSplit(n) {
//   let array = [];
//   if (n % 2) {
//     array.push(`${Math.floor(n / 2)}, ${Math.ceil(n / 2)}`);
//   } else {
//     array.push(`${n / 2}, ${n / 2}`);
//   }
//   return array;
// }

// console.log(numberSplit(4)); //[2,2]
// console.log(numberSplit(11)); //[5,6]
// console.log(numberSplit(-9)); //[-5,-4]

function numberSplit(n) {
    let array = [];
    if (n % 2) {
      array.push(`${(n-1) /2} , ${(n+1)/2}`);
    } else {
      array.push(`${n / 2}, ${n / 2}`);
    }
    return array;
  }
  
  console.log(numberSplit(4)); //[2,2]
  console.log(numberSplit(11)); //[5,6]
  console.log(numberSplit(-9)); //[-5,-4]

// 2.Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

function reorderDigits(arr, direction) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (direction === "asc") {
      newArr.push(
        String(arr[i])
          .split("")
          .sort((a, b) => a - b)
      );
    }
    if (direction === "desc") {
      newArr.push(
        String(arr[i])
          .split("")
          .sort((a, b) => b - a)
      );
    }
  }
  return newArr;
}

console.log(reorderDigits([515, 341, 98, 44, 211], "asc")); // [155, 134, 89, 44, 112]
console.log(reorderDigits([515, 341, 98, 44, 211], "desc")); //[551, 431, 98, 44, 211]