let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let homeLi = document.createElement("li");
let aboutLi = document.createElement("li");
let blogLi = document.createElement("li");
let contactLi = document.createElement("li");
let homeSec = document.createElement("section");
let aboutSec = document.createElement("section");
let blogSec = document.createElement("section");
let contactSec = document.createElement("section");

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(homeLi);
ul.append(aboutLi);
ul.append(blogLi);
ul.append(contactLi);
document.body.append(homeSec);
document.body.append(aboutSec);
document.body.append(blogSec);
document.body.append(contactSec);

homeLi.innerHTML = "<strong>Home</strong>";
aboutLi.innerHTML = "<strong>About</strong>";
blogLi.innerHTML =  "<strong>Blog</strong>";
contactLi.innerHTML = "<strong>Contact</strong>";

homeSec.innerHTML = "<strong>Home</strong>";
aboutSec.innerHTML = "<strong>About</strong>";
blogSec.innerHTML = "<strong>Blog</strong>";
contactSec.innerHTML = "<strong>Contact</strong>";

header.style.backgroundColor = "black";

ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.height = "10vh";
ul.style.backgroundColor = "#000";
ul.style.alignItems = "center";

homeLi.style.color = "#fff";
homeLi.style.listStyle = "none";
homeLi.style.cursor = "pointer";
aboutLi.style.color = "#fff";
aboutLi.style.listStyle = "none";
aboutLi.style.cursor = "pointer";
blogLi.style.color = "#fff";
blogLi.style.listStyle = "none";
blogLi.style.cursor = "pointer";
contactLi.style.color = "#fff";
contactLi.style.listStyle = "none";
contactLi.style.cursor = "pointer";

homeSec.style.height = "100vh";
homeSec.style.display = "flex";
homeSec.style.alignItems = "center";
homeSec.style.justifyContent = "center";
homeSec.style.fontSize = "20px";
homeSec.style.fontWeight = "bolder";
homeSec.style.border = " 1px dashed #000";

aboutSec.style.height = "100vh";
aboutSec.style.display = "flex";
aboutSec.style.alignItems = "center";
aboutSec.style.justifyContent = "center";
aboutSec.style.fontSize = "20px";
aboutSec.style.fontWeight = "bolder";
aboutSec.style.border = " 1px dashed #000";

blogSec.style.height = "100vh";
blogSec.style.display = "flex";
blogSec.style.alignItems = "center";
blogSec.style.justifyContent = "center";
blogSec.style.fontSize = "20px";
blogSec.style.fontWeight = "bolder";
blogSec.style.border = " 1px dashed #000";

contactSec.style.height = "100vh";
contactSec.style.display = "flex";
contactSec.style.alignItems = "center";
contactSec.style.justifyContent = "center";
contactSec.style.fontSize = "20px";
contactSec.style.fontWeight = "bolder";
contactSec.style.border = " 1px dashed #000";

homeSec.id = "homesection";
aboutSec.id = "aboutsection";
blogSec.id = "blogsection";
contactSec.id = "contactsection";

homeLi.addEventListener("click", function () {
  window.location = "#homesection";
});
aboutLi.addEventListener("click", function () {
  window.location = "#aboutsection";
});
blogLi.addEventListener("click", function () {
  window.location = "#blogsection";
});
contactLi.addEventListener("click", function () {
  window.location = "#contactsection";
});
