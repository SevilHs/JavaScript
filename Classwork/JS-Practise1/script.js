const obj = {
  id:1,  
  firstName: "Sevil",
  lastName: "Huseynova",
  lacation: "GDU2",
};

console.log(obj);

const obj2 = {obj2:obj
};

console.log(obj2);

const obj3={
    obj2:obj,
    id:3,  
}
console.log(obj3);


delete obj.lacation

console.log(obj);
