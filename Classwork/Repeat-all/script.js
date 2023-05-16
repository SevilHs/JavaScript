let menuBtn= document.querySelector('.menu-btn')
let closeBtn= document.querySelector('.close-btn')
let menuList= document.querySelector('.menu-list')
let sec1=document.querySelector('.sec1')
let sec2=document.querySelector('.sec2')

menuBtn.addEventListener('click',()=>{
    menuList.style.display='flex'
})

closeBtn.addEventListener('click',()=>{
    menuList.style.display='none'
})