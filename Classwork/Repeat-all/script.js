const BASE_URL='http://localhost:8080/users'

let menuBtn= document.querySelector('.menu-btn')
let closeBtn= document.querySelector('.close-btn')
let menuList= document.querySelector('.menu-list')
let sec1=document.querySelector('.sec1')
let sec2=document.querySelector('.sec2')
let tBody=document.querySelector('tbody')

menuBtn.addEventListener('click',()=>{
    menuList.style.display='flex'
})

closeBtn.addEventListener('click',()=>{
    menuList.style.display='none'
})

let allData=[]
let filtered=[]
let isEdited=false
let editId

async function getAllData() {
    const res= await axios(BASE_URL)
    const data=await res.data
    allData=data
    filtered= filtered.length? filtered : data
    filtered.forEach(element => {
        let tr=document.createElement('tr')
        tr.innerHTML=`
        <td>${element.id}</td>
        <td><img src="${element.photo}" /></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <td>
          <div>
            <a href="adduser.html?id=${element.id}" class="btn btn-success" >Edit</a>
            <button class="btn btn-danger">Delete</button>
            <a href="" class="btn btn-primary">Add Fav</a>
          </div>
        </td>
        `
        tBody.append(tr)
    });
}

getAllData()

