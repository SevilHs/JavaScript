// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]

// const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

// const falsyValue = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i]) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };

// console.log(falsyValue(arr));

// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']

// const stringValues = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };
// console.log(stringValues(arr));

// 3.Slice array from index 3 to 7(includes both indexs)

// const sliceArr= (array)=>{
//     let newArr = [];
//   for (let i = 3; i <= 7; i++) {
//     newArr.push(array[i])
//   }
//   return newArr;
// }

// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// 4.Sum only number values

// const sumArr= (array)=>{
//     let result=0
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i]=== 'number' && array[i]) {
//             result+=array[i]
//         }
//     }
//     return result
// }

// console.log(sumArr(arr)); //32

//5.Find last 8's index in 'arr'

// const findLastIndex =(array)=>{
//     let result=[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===8) {
//             result.push(i)
//         }
//     }
//     return Math.max(...result)
// }

// console.log(findLastIndex(arr)); //11

// const findLastIndex =(array)=>{
//     let result=[]
//     for (let i= array.length; i>1; i--) {
//         if(array[i]===8){
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(findLastIndex(arr));

// 6.Reverse 'arr'

// const reverseArr =(array)=>{
//     let result=[]
//     for (let i= array.length; i>0; i--) {
//        result.push(array[i])
//     }
//     return result
// }

// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// 7. Sort 'arrNum' ascending
// const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51];

// const sortArr = (array) => {
//   let done = false;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var a = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = a;
//       }
//     }
//   }
//   return array;
// };
// console.log(sortArr(arrNum)); //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// 8. Sort 'arrLetters' ascending

/  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]

const flatArr=(array)=>{
    let result=[]
    for (let i = 0; i < array.length; i++) {
       for (let m = 0; m < array[i].length; m++) {
            result.push(array[i][m])
       }
    }
    return result
}

console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]
