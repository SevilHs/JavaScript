const url = "http://localhost:8000/users";

let tBody = document.querySelector("#tBody");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let submitBtn = document.querySelector("#submitBtn");
let searchInput = document.querySelector("#searchInput");
let arrowDown = document.querySelector(".arrow-down");
let arrowUp = document.querySelector(".arrow-up");
let thFirstName = document.querySelector("#thFirstName");
let notification = document.querySelector("#notification");

let allData = [];
let filtered = [];

async function drawTable() {
  tBody.innerHTML = "";
  const res = await axios.get(url);
  const data = await res.data;
  if (allData == "") {
    allData = data;
  }
  allData.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        <td>${element.email}</td>
        <td>
            <a onclick=editUser('${element.id}') class="btn btn-warning">Edit</a>
            <a class="btn btn-danger" onclick=deleteUser('${element.id}')>Delete</a>
        </td>
        `;
    tBody.append(tr);
  });
}

drawTable();

let bool = true;

thFirstName.addEventListener("click", () => {
  if (bool) {
    allData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    drawTable();
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
    bool = false;
    console.log(allData);
  } else {
    allData.sort((a, b) => b.firstName.localeCompare(a.firstName));
    drawTable();
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-block";
    bool = true;
    console.log(allData);
  }
});

// async function editUser(userId) {
//   console.log('2',allData);
// }

function deleteUser(id) {
  axios.delete(`${url}/${id}`);
}

function editUser(id) {
  filtered = allData.filter((item) => item.id == id);
  filtered.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
    email.value = item.email;
  });
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (firstName.value && lastName.value && email.value) {
      notification.style.display='none'
      let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      };
      axios.patch(`${url}/${id}`, obj);
    } else {
      notification.style.display='inline-block'
      notification.innerHTML = "Pls fill in the field...";
    }
  });
}

searchInput.addEventListener("input", (event) => {
    // console.log(allData);
    filtered = allData.filter((item) => {
    item.firstName
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase());
  });
  allData=filtered
  drawTable();
  console.log(filtered);
});