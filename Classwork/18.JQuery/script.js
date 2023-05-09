///1

const colors=['red', 'green', 'blue', 'yellow', 'orange','brown']
$('.changeBtn').click(()=>{
    // $(".title").css({color : colors[Math.floor(Math.random()*colors.length)]} )
    $(".title").css("color" , colors[Math.floor(Math.random()*colors.length)])
})

///2

$('.hideBtn').click(()=>{
    $('.title').hide()
})


$('.showBtn').click(()=>{
    $('.title').show()
})

///3

$.each(colors, function(index,value){
    console.log(value);
})

///4

const numbers=[4,2,false,null,'false', NaN, undefined, 8, true, '9']

let sum=0

$.map(numbers, function(value, index){
  return  value ? sum+= index : null;
})

console.log(sum);



///////////////////////// Algorithms ////////////////////////

//1

function capitalizeFirst(str) {
  return str.split(' ').map(itm=> itm[0].toUpperCase()+ itm.slice(1)).join` `
}

console.log(capitalizeFirst('This is a title'));
console.log(capitalizeFirst('capitalize every word'));


//2

function encoded(str) {
  return  str.split(' ').map(item=> item.length>4 ?
    item.split('').map(elem=> elem='*').join`` : item).join(' ')
}

console.log(encoded('The code is fourty'));
console.log(encoded('Two plus three is five'));
console.log(encoded('aaaa aaaaa 1234 1234565'));