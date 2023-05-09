function isAnogram(text1, text2) {
 return text1.toLocaleLowerCase().split("").sort((a,b)=>a.localeCompare(b)).join("") ===
    text2.toLocaleLowerCase().split("").sort((a,b)=>a.localeCompare(b)).join("");
}
console.log(isAnogram("sevil", "Evils"));


function maxChar(str) {

    let count
    let result
//   return str.split('t').length-1
    return str.split('').map(item=> max=str.split(item).length-1)
   return result =  str.split('t').length-1
}

console.log(maxChar('ttttttttbdhdhdttt'));

// from collections import Counter
