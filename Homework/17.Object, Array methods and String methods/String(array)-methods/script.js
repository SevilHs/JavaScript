console.log("/////////////////// 1 /////////////");
// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.

const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];

function getUpper(anyArr) {
  const newArr = anyArr.map(
    (item) =>
      item[0].toLocaleUpperCase() +
      item.slice(1, -1) +
      item[item.length - 1].toLocaleUpperCase()
  );
  return newArr;
}

console.log(getUpper(arr1));



console.log("/////////////////// 2 /////////////");
// 2.String and Array



///////// 2.1 /////////

let text = "We are MERN-Stack developers";

let newText = text.replace("MERN-Stack", "Front-end").concat("!");

console.log(newText);

///////// 2.2 /////////

let newText2 = text.toLocaleLowerCase().replaceAll("e", "a").concat("!");

console.log(newText2);

///////// 2.3 /////////

let newText3 = text.concat("in Microsoft!");

console.log(newText3);

///////// 2.4 /////////

let newText4 = [];

text
  .split("")
  .map((element, index) =>
    element.toLocaleLowerCase() === "r" ? newText4.push(index) : newText4
  );

console.log(newText4);

///////// 2.5 /////////

let newText5 = text.toLocaleLowerCase().indexOf("r", 5);

console.log(newText5);

///////// 2.6 /////////

let vowels = ["a", "i", "o", "u", "e"];

let newText6 = [];

text
  .split("")
  .forEach((element) => vowels.includes(element) && newText6.push(element));

console.log(newText6.filter((item, index) => newText6.indexOf(item) === index));

console.log(Array.from(new Set(newText6)));

console.log(
  newText6.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]))
);


console.log(Array.from(new Set(text.split("").filter((elem)=>vowels.includes(elem)))));

console.log(text.split('').filter((item,index,array)=>vowels.includes(item) && array.indexOf(item)=== index ));



console.log("/////////////////// 3 /////////////");
///////////////// 3 ///////////////



const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

// let calcArea = arr3.reduce(
//  (sum, item) => (item.region.length == 6 ? (sum += item.area) : sum),
//  0
// );

// console.log(calcArea);

let calcArea = () => console.log(arr3.reduce((sum, item) => (item.region.length == 6 ? (sum += item.area) : sum),0));
calcArea();



console.log("/////////////////// 4 /////////////");
/////////////////////////// 4 ////////////////////////



const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];

console.log(arr4.sort((a, b) => a - b));



console.log("/////////////////// 5 /////////////");
/////////////////////////// 5 ////////////////////////



const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];

console.log(arr5.flat(Infinity));



console.log("/////////////////// 6 /////////////");
/////////////////////////// 6 ////////////////////////



const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
console.log(colors.sort((a,b)=> a.length-b.length || a.localeCompare(b)));
