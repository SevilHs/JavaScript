const BASE_URL = "http://localhost:8000/users";

let tBody = document.querySelector("tbody");
let thFirstName = document.querySelector("#thFirstName");
let arrowUp = document.querySelector(".arrow-up");
let arrowDown = document.querySelector(".arrow-down");
let searchInput = document.querySelector("#searchInput");
let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let cardNum = document.querySelector("#cardNumber");
let submit = document.querySelector("#submitBtn");
let notification = document.querySelector("#notification");

let allData = [];
let filtered = [];
let bool = true;
let isEdited = false;
let editId;

async function getAllData() {
  tBody.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = await res.data;
  allData = allData == "" ? data : allData;
  allData.forEach((element) => {
    let tr = document.createElement("tr");
    element.cardNum = `${element.cardNum}`.split("").fill("*", 0, -4).join("");
    tr.innerHTML = `
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        <td>${element.email}</td>
        <td>${element.cardNum}</td>
        <td>
            <a class="btn btn-warning" onclick=editUser(${element.id})>Edit</a>
            <a class="btn btn-danger" onclick=deleteUser(${element.id},this)>Delete</a>
            <a class="btn btn-success" onclick=detailsUser(${element.id})>Details</a>
            <a class="btn btn-success" onclick=detailsUser2(${element.firstName},${element.date})>Details</a>
        </td>
    `;
    tBody.append(tr);
    // console.log( `${element.cardNum}`.slice(-4).padStart(`${element.cardNum}`.split('').length,'*'));
    // console.log( `${element.cardNum}`.split('').fill('*',0,-4).join(''));
  });
}

getAllData();

function showNotification(bgColor, text) {
  notification.hidden = false;
  notification.style.backgroundColor = `${bgColor}`;
  notification.innerHTML = `${text}`;
  setTimeout(() => {
    notification.hidden = true;
  }, 3000);
}

function resetInp() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  cardNum.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    cardNum: cardNum.value,
    date: new Date().toLocaleDateString(),
  };
  //   console.log(obj);
  if (!firstName.value || !lastName.value || !email.value || !cardNum.value) {
    showNotification("burlywood", "Please fill in the fields");
  } else if (isEdited) {
    // console.log(editId);
    axios.patch(`${BASE_URL}/${editId}`, obj).then((res) => {
    isEdited=false
    showNotification("darkolivegreen", `${res.data.firstName} updated`);
    submit.value = "Submit";
    });
  } else {
    axios.post(BASE_URL, obj);
  }
  resetInp();
  allData=[]
  getAllData()
  //   console.log('111');
});

async function editUser(id) {
  submit.value = "Edit";
  const res = await axios(`${BASE_URL}/${id}`);
  const data = await res.data;
  firstName.value = data.firstName;
  lastName.value = data.lastName;
  email.value = data.email;
  cardNum.value = data.cardNum;
  editId = id;
  isEdited = true;
}

async function deleteUser(id, delbtn) {
  await axios.delete(`${BASE_URL}/${id}`);
  delbtn.parentElement.parentElement.remove();
  // console.log(delbtn);
}

searchInput.addEventListener("input", (e) => {
  axios(BASE_URL).then((res) => {
    filtered = res.data.filter((item) =>
      item.firstName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    allData = filtered;
    getAllData();
  });
});

thFirstName.addEventListener("click", () => {
  if (bool) {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    allData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    getAllData();
    bool = false;
    // console.log(allData);
  } else {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    allData.sort((a, b) => b.firstName.localeCompare(a.firstName));
    getAllData();
    bool = true;
  }
});

async function detailsUser(id) {
  const res = await axios(`${BASE_URL}/${id}`);
  const data = await res.data;
  showNotification(
    "cadetblue",
    `User ${data.firstName} has been created on- ${data.date} `
  );
  //  axios(`${BASE_URL}/${id}`).then(res=>console.log(res.data.firstName));
}

function detailsUser2(fname,date) {
    showNotification('cadetblue',`User ${fname} has been created on- ${date} `)
}
