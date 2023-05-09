// // let addBtn = document.querySelector("#btn");
// // let deleteBtn = document.querySelector("#Delete");
// // let emptyBtn = document.querySelector("#Empty");

// // addBtn.addEventListener("click", function () {
// //   JSON.stringify(localStorage.setItem("firstName", "Kamran"));
// //   JSON.stringify(localStorage.setItem("lastName", "Akberov"));
// //   JSON.stringify(localStorage.setItem("age", 23));
// // });
// // //1.1
// // console.log(localStorage.length);

// // //2
// // for (let i = 0; i < localStorage.length; i++) {
// //   console.log(localStorage.key(i));
// // }

// // //3
// // for (let i = 0; i < localStorage.length; i++) {
// //   let values = localStorage.key(i);
// //   console.log(localStorage.getItem(values));
// // }

// // //4
// // console.log(localStorage.key(0));

// // //4.1
// // let newArr = [];
// // for (let i = 0; i < localStorage.length; i++) {
// //   newArr.push(localStorage.key(i));
// // }
// // console.log(newArr);

// // //5
// // let value= localStorage.key(0)
// // console.log(localStorage.getItem(value));

// // //5.1
// // let newArr2 = [];
// // for (let i = 0; i < localStorage.length; i++) {
// //   let values = localStorage.key(i);
// //   newArr2.push(localStorage.getItem(values));
// // }
// // console.log(newArr2);

// // //6

// // deleteBtn.addEventListener('click',function(){
// //     localStorage.removeItem('firstName')
// // })

// // //6.1

// // emptyBtn.addEventListener('click',function(){
// //     localStorage.clear()
// // })

// // //7

// let form = document.querySelector("form");
// let userName = document.querySelector("#username");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let checkBox = document.querySelector("#check");

// let usersData = JSON.parse(localStorage.getItem("data")) || [];

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (userName.value && email.value) {
//     let obj = {
//       username: userName.value,
//       email: email.value,
//       password: password.value,
//       checkbox: checkBox.checked,
//     };
//     usersData.push(obj);
//     localStorage.setItem("data", JSON.stringify(usersData));
//   }
// });

// //8
// console.log(JSON.parse(localStorage.getItem("data")));

// Loop values and keys of localStorage ////////////////////////////////////////////////

// first way
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(localStorage.getItem(key));
// }

// second way

// for (let key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//         // console.log(key);
//         console.log(localStorage.getItem(key));
//     }
// }

// third way

// let values = Object.values(localStorage)
// for (let value of values) {
//     console.log(value);
// }

// let keys = Object.keys(localStorage)
// for (let key of keys) {
//     console.log(key);
// }

// localStorage.setItem('num', JSON.stringify({ name: 'Ulfat', surname: 'Zakirli' }))
// let value = localStorage.getItem('num')
// console.log(JSON.stringify(localStorage, null, 200));
// console.log(value);

// //////////////////////////////////////////////////////////////////////////////////////////

// const myForm = document.querySelector('#myForm')
// const exampleInputEmail1 = document.querySelector('#exampleInputEmail1')
// const exampleInputPassword1 = document.querySelector('#exampleInputPassword1')
// const exampleCheck1 = document.querySelector('#exampleCheck1')

// let users = JSON.parse(localStorage.getItem('users')) || []

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let myUser = {
//         username: exampleInputUserName.value,
//         email: exampleInputEmail1.value,
//         password: exampleInputPassword1.value,
//         checked: exampleCheck1.checked
//     }
//     if (myUser.username && myUser.email) {
//         users.push(myUser)
//         localStorage.setItem('users', JSON.stringify(users))
//     }
// })

// / 5.show console localeStorage key/value as Object

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     localStorage.setItem('firstName', 'Kamran')
//     localStorage.setItem('lastName', 'Akberov')
//     localStorage.setItem('age', '23')
// })

// let arr = []
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     let value = localStorage.getItem(key)
//     arr.push(value)
// }

// console.log(arr);

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(JSON.parse(localStorage.getItem(key)));
// }

// let keys = Object.keys(localStorage)
// for (let key of keys) {
//     console.log(key);
// }
