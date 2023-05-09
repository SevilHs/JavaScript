//////////////// 1 ////////////////

let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"

function secretName(anyNames) {
  const newArr = anyNames.map((item) => item[0]);
  return newArr.join("");
}

console.log(secretName(names1.sort((a, b) => a.localeCompare(b))));
console.log(secretName(names2.sort((a, b) => a.localeCompare(b))));
console.log(secretName(names3.sort((a, b) => a.localeCompare(b))));

//////////////// 2 ////////////////

const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

///// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

const newUsers = [];

users.map(
  (item) =>
    item.uni === "UNEC" &&
    item.surname.toLocaleLowerCase()[0] === "r" &&
    newUsers.push(item)
);

console.log(newUsers);

///// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

console.log(
  users.filter(
    (element) =>
      element.age === "22" && element.name.toLocaleLowerCase().startsWith("a")
  )
);

//// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

const newUser = [];

console.log(
  users.map((item) =>
    item.gender === "male"
      ? (item.name = `Mr ${item.name}`)
      : (item.name = `Mrs ${item.name}`)
  )
);

//// 2.4.Sort users by age (ascending)

console.log(users.sort((a, b) => a.age - b.age));


//// 3.Shuffle array////////////////////////////////////////////////////////////////////

const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]

