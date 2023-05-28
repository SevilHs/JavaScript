const BASE_URL2 = "http://localhost:8000/aromafav";

let row=document.querySelector('.row')

async function getfavData(){
    row.innerHTML=''
    const res= await axios(BASE_URL2)
    const data= res.data
    data.forEach(element => {
        row.innerHTML+=`
        <span class="col col-md-6 col-lg-4 col-xl-3 product-card">
        <div class="product-card-div">
          <div class="img-div">
            <img src="${element.photo}" alt="product-img" />
            <div class="actions">
              <i class="fa-regular fa-trash-can product-icon" onclick=deleteCard(${element.id},this)></i>
            </div>
          </div>
          <p>${element.title}</p>
          <h5>${element.name}</h5>
          <p class="product-price">$${element.price}</p>
        </div>
      </span>
        `
    });
}

getfavData()

async function deleteCard(id,btn){
    await axios.delete(`${BASE_URL2}/${id}`)
    btn.closest('span').remove()
}