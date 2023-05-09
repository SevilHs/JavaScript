let startBtn = document.createElement("button");
let timeParag = document.createElement("p");
let form = document.createElement("form");
let nameLabel = document.createElement("label");
let nameBtn = document.createElement("input");
let surnameLabel = document.createElement("label");
let surnameBtn = document.createElement("input");
let checkbox = document.createElement("input");
let radio1 = document.createElement("input");
let radio2 = document.createElement("input");
let submit = document.createElement("button");
let nextBtn = document.createElement("button");

document.body.append(startBtn);
document.body.append(timeParag);
document.body.append(form);
form.append(nameLabel);
form.append(nameBtn);
form.append(surnameLabel);
form.append(surnameBtn);
form.append(checkbox);
form.append(radio1);
form.append(radio2);
form.append(submit);
document.body.append(nextBtn);

startBtn.innerHTML = "Let's start...";
nameLabel.innerHTML = "<strong>Name</strong>";
surnameLabel.innerHTML = "<strong>Surname</strong>";
submit.innerHTML = "<strong>Submit</strong>";
nextBtn.innerHTML = "Next Page>";

nameBtn.setAttribute("required", "");
surnameBtn.setAttribute("required", "");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("required", "");
radio1.setAttribute("type", "radio");
radio1.setAttribute("required", "");
radio2.setAttribute("type", "radio");
radio2.setAttribute("required", "");

startBtn.style.display = "block";
timeParag.style.border = "1px solid black";
timeParag.style.display = "inline-block";

timeParag.style.padding = "10px";
timeParag.style.width = "45px";

form.style.height = "80vh";
form.style.border = "1px dashed black";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.gap = "10px";

checkbox.style.accentColor='red'

submit.setAttribute("disabled", "");
nextBtn.setAttribute("disabled", "")

radio1.setAttribute('name','test')
radio2.setAttribute('name','test')

let interval;
let count ;

startBtn.addEventListener("click", function () {
    count=15
    timeParag.style.border = "1px solid black";
    timeParag.style.color = "black";
    timeParag.innerHTML = `00: ${count}`;
    interval = setInterval(() => {
    count -= 1;
    timeParag.innerHTML = `00: ${count}`;
    submit.removeAttribute("disabled");
    this.setAttribute('disabled','')
    if (count == 0) {
      clearInterval(interval);
      timeParag.innerHTML = "<strong>U missed :(</strong>";
      timeParag.style.width = "80px";
      submit.setAttribute("disabled", "");
      this.removeAttribute('disabled')
    }

    if (count < 10) {
      timeParag.style.border = "1px solid red";
      timeParag.style.color = "red";
    }
  }, 300);
});

timeParag.innerHTML = "00: 15";

submit.addEventListener("click", function () {
    nextBtn.removeAttribute('disabled')
});

nextBtn.addEventListener('click',function(){
    alert('Hello Teacher')
})
