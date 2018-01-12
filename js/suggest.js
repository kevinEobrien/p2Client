var ul = document.querySelector("ul");
var home = document.querySelector(".home");
var suggestions = document.querySelector(".suggestions");
var descriptor = document.querySelector(".describe");
var linkage = document.querySelector(".link");
const url = "https://stark-scrubland-13367.herokuapp.com/suggestions";
home.addEventListener("click", goHome);
function goHome() {
  console.log("function is GO");
  location.href = "index.html";
}

noresults();

function noresults() {
  var form = document.createElement("form");
  var formDiv = document.createElement("div");
  var descriptionInput = document.createElement("input");
  descriptionInput.classList.add("describe");
  var descriptionLabel = document.createElement("label");
  descriptionLabel.innerHTML = "Description:";
  formDiv.appendChild(descriptionLabel);
  formDiv.appendChild(descriptionInput);
  form.appendChild(formDiv);
  var formDiv2 = document.createElement("div");
  var linkLabel = document.createElement("label");
  linkLabel.innerHTML = "Link:";
  var linkInput = document.createElement("input");
  linkInput.classList.add("link");
  formDiv2.appendChild(linkLabel);
  formDiv2.appendChild(linkInput);
  form.appendChild(formDiv2);
  var button = document.createElement("button");
  var pTag = document.createElement("p");
  button.classList.add("submit-button");
  button.innerText = "SUBMIT";
  form.addEventListener("submit", postData);
  form.appendChild(button);
  suggestions.appendChild(form);
  form.appendChild(pTag);
}

function postData(event) {
  var pTag = document.querySelector("p");
  event.preventDefault();
  console.log ("function is running");
  var descriptor = document.querySelector(".describe").value;
  var linkage = document.querySelector(".link").value;
  fetch(url, {
    headers: new Headers({ "Content-Type": "application/json" }),
    method: "POST",
    body: JSON.stringify({
      description: descriptor,
      link: linkage
    })
  })
    .then(resp => resp.json())
    .then(function (resp) {
      pTag.innerText = Object.keys(resp)[0];
    })
    .catch(console.error);
  setTimeout(function(){ pTag.innerText = "" ;}, 4000);
}
