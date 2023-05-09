//1//

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

//2//

const arr1 = [1, false, "lulu"];

console.log(arr1);

//3//

const arr3 = [0, 1, 2, 3, 4, 5];

const arr4 = arr3;

console.log(arr4);

//4//

const arr5 = [0, 1, 2, 3, 4, 5, 6, 7];

arr5.push(8, 9);

console.log(arr5);

//5//

const arr6 = [];

arr6.push(5, 6, 7);

arr6.shift();

arr6.unshift(1);

console.log(arr6);

//6//

const arr7 = ["Sevil", "Huseynova", 20, "Quba"];

arr7[arr7.length-1] = "Qusar"; 

console.log(arr7);

//7//

const arr8 = ["first task"];

for (let item of arr8) {
  console.log(item);
}

const obj = {
  id: 1,
  firstName: "Sevil",
  lastName: "Huseynova",
  lacation: "GDU2",
};

console.log(obj);

const obj2 = obj;

console.log(obj2);

obj2.id=3;

console.log(obj2);

for (let value in obj) {
 console.log(obj[value]);
}

for (let key in obj) {
 console.log(key);
}

delete obj.lacation;

console.log(obj);

const newObj=Object.assign(obj)

console.log(newObj);