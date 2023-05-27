const BASE_URL2 = "http://localhost:8000/gymcard";

let row=document.querySelector('.row')

async function getFavData(){
    row.innerHTML=''
   const res= await axios(BASE_URL2)
   const data=await res.data
   data.forEach(element => {
    row.innerHTML+=`
    <div class="col col-12 col-md-6 col-lg-4 card-div">
    <div class="fav-card">
      <img src="${element.photo}" alt="">
      <h5>${element.title}</h5>
      <p>${element.description}</p>
      <button class="btn" onclick=removeData(${element.id})>Remove</button>
    </div>
  </div>
    `
   });
}

getFavData()

async function removeData(id){
   await axios.delete(`${BASE_URL2}/${id}`)
   getFavData()
}