let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let total = document.querySelector("#total");

let gather = document.querySelector("#gather");
let extraction = document.querySelector("#extraction");
let impact = document.querySelector("#impact");
let divide = document.querySelector("#divide");
let list = document.querySelector("ul#list-in");

let islem = 0;
total.innerHTML = islem;

function listItem(secim = "") {
  let items = document.createElement("li");
  items.innerHTML = ":" + number1.value + secim + number2.value + "=" + islem;
  list.append(items);
}

function calculate() {
  islem = parseInt(number1.value) + parseInt(number2.value);
  total.innerHTML = islem;
  listItem("+");
}

function slamming() {
  islem = parseInt(number1.value) - parseInt(number2.value);
  total.innerHTML = islem;
  listItem("-");
}

function bump() {
  islem = parseInt(number1.value) * parseInt(number2.value);
  total.innerHTML = islem;
  listItem("*");
}
function divid() {
  islem = parseInt(number1.value) / parseInt(number2.value);
  total.innerHTML = islem;
  listItem("/");
}

let temizle = document.querySelector("#clear");
function clear() {
  number1.innerHTML = number1.value = "";
  number2.innerHTML = number2.value = "";
  total.innerHTML = 0;
  list.remove();
}
temizle.addEventListener("click", clear);
gather.addEventListener("click", calculate);
extraction.addEventListener("click", slamming);
impact.addEventListener("click", bump);
divide.addEventListener("click", divid);
