////////////////////////// 1 //////////////////////

let arr = [2, 4, -3, -43, 41, -3];

let selectPositive = arr.filter((element) => element > 0);

console.log(selectPositive);

////////////////////// 2 /////////////////////////

let arr2 = [3, 4, 5];

function isRectangular(a, b, c) {
  if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    console.log("yes");
  }
}

isRectangular(3, 5, 4);

////////////////////// 3 /////////////////////////

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));

/////////////////////// 4 //////////////////////

const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];

// console.log(countries.map((elem)=> elem.length));

function name(params) {}

////////////////////// 5 /////////////////////

let arr3 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "little",
    key: 10,
  },
];

console.log(
  arr3.filter(
    (element) =>
      element.name[0] === "t" && element.name[element.name.length - 1] === "t"
  )
);

// let arrLength = arr3.map((item) => item.length);
// console.log(Math.max(...arrLength));

function func1(array) {
  let arrLength = array.map((item) => item.name.length);
  return array.find((el) => el.name.length === Math.max(...arrLength)).key;
}

console.log(func1(arr3));

console.log(
  arr3.filter((element) => element.name.startsWith("l") && element.key > 10)
);

function func2(array) {
  let keyLength = array.map((item) => item.key);
  return array.find((element) => element.key=== Math.max(...keyLength)).name;
}

console.log(func2(arr3));
