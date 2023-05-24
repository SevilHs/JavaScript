let id= new URLSearchParams(window.location.search).get('id')
const BASE_URL = "http://localhost:8000/flowers";

let text=document.querySelector('.page-text')
let form=document.querySelector('form')
let flowerName=document.querySelector('#name')
let price=document.querySelector('#price')
let photo=document.querySelector('#photo')

if(id){
    async function fillInput(){
        const res=await axios(`${BASE_URL}/${id}`)
        const data= res.data
        flowerName.value=data.name
        price.value=data.price
    }
    fillInput()
    text.innerHTML='Edit Card'
}

async function editCard(){
    let obj={
        name:flowerName.value,
        price:price.value,
        photo:`./assets/images/${photo.value.split('\\')[2]}`
    }
    await axios.patch(`${BASE_URL}/${id}`,obj)
    window.location="index.html"
}

async function addCard(){
    let obj={
        name:flowerName.value,
        price:price.value,
        photo:`./assets/images/${photo.value.split('\\')[2]}`
    }
    await axios.post(BASE_URL,obj)
    window.location="index.html"
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (flowerName.value && price.value && photo.value) {
        if(id){
            editCard()
        }else{
            addCard()
        }
    }
})