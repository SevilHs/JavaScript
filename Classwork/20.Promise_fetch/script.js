// import { BASE_URL } from "./api.js";
import { API_URL } from "./api.js";

// function filteredByC() {
//     fetch(`${BASE_URL}`)
//   .then((res) => res.json())
//   .then((data) => {
//     let arr = data.filter((item) => item.completed);
//     console.log(arr);
// });
// }
// filteredByC()

// // fetch(`${BASE_URL}`)
// //   .then((res) => res.json())
// //   .then((data) => {
// //     let arr = data.filter((item) => !item.completed);
// //     console.log(arr);
// // });

// function filteredById() {
//     fetch(`${BASE_URL}`)
//   .then((res) => res.json())
//   .then((data) => {
//     let arr = data.filter((item) => item.userId==2);
//     console.log(arr);
// });
// }

// filteredById()

// function getData() {
//     fetch(`${BASE_URL}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// }

// getData()

let tbody = document.querySelector("tbody");

function getInfo() {
  fetch(`${API_URL}`).then((res) =>
    res.json().then((data) => {
      data.forEach((element) => {
        let trElem = document.createElement("tr");
        trElem.innerHTML = `
            <td>${element.id}</td>
            <td>${element.companyName}</td>
            <td>${element.address.city}</td>
            <td>${element.address?.country}</td>
            <td>${element.address?.phone}</td>
            <td><button style="background-color: brown; border: none; color:white; padding:7px; border-radius: 5px;" onclick=deleteCompany("${element.id}")  id="${element.id}" >Delete</button></td>
        `;
        tbody.append(trElem);

        
      });
    })
  );
}

getInfo();

function deleteCompany(id) {
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
    method: "DELETE",
  });
  getInfo()
  document.querySelector(`#${id}`).closest("tr").remove()
}

// deleteCompany()
