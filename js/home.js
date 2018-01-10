var form = document.querySelector("form");
form.addEventListener("submit", navigateList);
var suggest = document.querySelector(".suggest");
suggest.addEventListener("click", navigateSuggest);
var random = document.querySelector(".random");
random.addEventListener("click", navigateRandom);
var editor = document.querySelector(".editor");
editor.addEventListener("click", navigateEditor);

function navigateList (event){
  event.preventDefault();
  localStorage.setItem("searchterm", event.target[0].value);
  localStorage.setItem("resource", event.target[1].value);
  location.href = "list.html";
}

function navigateRandom (event){
  event.preventDefault();
  location.href = "random.html";
}
function navigateEditor(event){
  event.preventDefault();
  location.href = "editor.html";
}
function navigateSuggest (event){
  event.preventDefault();
  location.href = "suggest.html";
}
