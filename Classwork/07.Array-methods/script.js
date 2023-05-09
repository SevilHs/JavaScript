////////////// 1.SPLICE METHOD ////////////

const arr1 = ["a", "b", "c", "d", "e"];

// arr1.splice(1,1)
// arr1.splice(2,2)
// arr1.splice(arr1.length-1)
// arr1.splice(arr1.length-3)
// arr1.splice(3,0,3,'4')
arr1.splice(0, 2, "A", "B");
console.log(arr1);




////////////// 2.SLICE METHOD ////////////




const arr2 = ["user1", "user2", "user3", 11, 3, 5];

// const newArr= arr2.slice(0)
// const newArr= arr2.slice(1,5)
const newArr = arr2.slice(2);

console.log(newArr);




////////////// 3.CONCAT METHOD ////////////

const arr3 = [1, 2, 3];
const arr33 = [4, 5, 6];

// const newArr2= arr3.concat(arr33)
const newArr2 = arr3.concat(["a", "b"]);

console.log(newArr2);




////////////// 4.FOREACH METHOD ////////////

const arr4 = ["name", "surname", 10, "age", "city", "uni", 80, 20];

// arr4.forEach((item)=>{
//     console.log(item);
// })

arr4.forEach((item) =>
  typeof item == "number" ? console.log(item * 2) : item
);




////////////// 5.MAP METHOD ////////////

const arr5 = [4, 5, 6, "2", 6, true, undefined, "55"];

// arr5.map((item)=>console.log(item))
// const newArr3=arr5.map((item)=> typeof item=='number' ?item*5 :item)
// console.log(newArr3);
// const newArr4=arr5.map((item)=> console.log(String(item)));
// const newArr4=arr5.map((item)=> console.log(Boolean(item)));
const newArr4 = arr5.map((item) => console.log(Number(item)));




////////////// 6.FILTER METHOD ////////////

const mixArray = ["1", 2, 4, "a", false, "9", 12, undefined, 3, true, null];

// const newArr5=mixArray.filter((item) => typeof item==='number' )
// console.log(newArr5);

// const newArr5=mixArray.filter((item) => typeof item==='string' )
// console.log(newArr5);

// const newArr5 = mixArray.filter((item) => typeof item === 'boolean');
// console.log(newArr5);

const newArr5=mixArray.filter((item)=> !item)
console.log(newArr5);
