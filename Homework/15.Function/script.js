///////// 1 /////////

const arr1 = [1, 2, 3];
const arr2 = [80, 5, 100];
const arr3 = [-500, 0, 50];

function getFirstValue(firstvalue) {
  return firstvalue[0];
}

console.log(getFirstValue(arr1));
console.log(getFirstValue(arr2));
console.log(getFirstValue(arr3));

console.log("///////////////////////////");

///////// 2 /////////

const arrlast1 = [1, 2, 3];
const arrlast2 = ["cat", "dog", "duck"];
const arrlast3 = [true, false, true];

function getLastItem(lastvalue) {
  return lastvalue[lastvalue.length - 1];
}

console.log(getLastItem(arrlast1));
console.log(getLastItem(arrlast2));
console.log(getLastItem(arrlast3));



console.log("///////////////////////////");
///////// 3 /////////



const arrfind1 = [["hi", "edabit", "fgh", "abc"], "fgh"]; //2
const arrfind2 = [["Red", "blue", "Blue", "Green"], "blue"]; //1
const arrfind3 = [["a", "g", "y", "d"], "d"]; //3
const arrfind4 = [["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"]; //0
const newArr = [];

const findIndex = function (array, string) {
  newArr.push(array, string)  
  return newArr
}

console.log(findIndex(arrfind1[0], arrfind1[1]));
newArr.length=0
console.log(findIndex(arrfind2[0], arrfind2[1]));
newArr.length=0
console.log(findIndex(arrfind3[0], arrfind3[1]));
newArr.length=0
console.log(findIndex(arrfind4[0], arrfind4[1]));





console.log("///////////////////////////");
///////// 4 /////////



const addition1 = [3, 2];
const addition2 = [-3, -6];
const addition3 = [7, 3];
let sum = 0;

function addition(anyarray) {
  for (let i = 0; i < anyarray.length; i++) {
    sum += anyarray[i];
  }
  return sum;
}

console.log(addition(addition1));
sum = 0;
console.log(addition(addition2));
sum = 0;
console.log(addition(addition3));

console.log("///////////////////////////");

///////// 5 /////////

const less1 = [22, 15];
const less2 = [83, 34];
const less3 = [3, 77];

const lessThan100 = (less) => less[0] + less[1] <100

console.log(lessThan100(less1));
console.log(lessThan100(less2));
console.log(lessThan100(less3));




console.log("///////////////////////////");

///////// 6 /////////


const volume1 = { width: 2, length: 5, height: 1 };
const volume2 = { width: 4, length: 2, height: 1 };
const volume3 = { width: 2, length: 3, height: 5 };

function volumeOfBox(m) {
  return m.width * m.length * m.height;
}

console.log(volumeOfBox(volume1));
console.log(volumeOfBox(volume2));
console.log(volumeOfBox(volume3));



console.log('////////////////');

///////// 7 /////////

function points(twoPointers, threePointers) {
    return twoPointers *2 + threePointers*3
}
let result = points(1,1);
console.log(result);
let result2= points(7,5)
console.log(result2);
let result3=points(38,8)
console.log(result3);



console.log('///////////////////////////');

///////// 8 /////////

const arr15 = [
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    }
]

function fillInfo(info) {
    for (const item of info) {
        info[0].name='Ulfat'
        info[0].surname='Zakirli'
        info[0].city='Baku'
        info[1].name='Ulfat'
        info[1].surname='Zakirli'
        info[1].city='Baku'
        info[2].name='Ulfat'
        info[2].surname='Zakirli'
        info[2].city='Baku'
    }
    return info
}

console.log(fillInfo(arr15));
