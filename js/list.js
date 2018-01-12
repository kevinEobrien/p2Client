const url = "https://stark-scrubland-13367.herokuapp.com/";
const urlB = "https://stark-scrubland-13367.herokuapp.com/suggestions";
let searchterm = localStorage.getItem("searchterm");
let resource = localStorage.getItem("resource");
var ul = document.querySelector("ul");
var button = document.querySelector("button");
button.addEventListener("click", goHome);

function goHome() {
  location.href = "index.html";
}

fetch(url)
  .then(response => response.json())
  .then(function(response) {
    let searchable = response.data;
    matchSearch(searchable);
  })
  .catch(console.error);

function matchSearch(array) {
  var tracker = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].description.toLowerCase().includes(searchterm) && array[i].type === resource) {
      populateList(array[i]);
      tracker++;
    }
  }
  if (tracker === 0) {
    noresults();
  }
}

function populateList(data) {
  var newCard = document.createElement("li");
  var cardTitle = document.createElement("h3");
  cardTitle.innerText = data.description;
  var linebreak = document.createElement("br");
  var link = document.createElement("a");
  link.href = data.link;
  link.innerText = data.link;
  newCard.appendChild(cardTitle);
  newCard.appendChild(linebreak);
  newCard.appendChild(link);
  ul.appendChild(newCard);
}

function noresults() {
  var errorMessage = document.createElement("p");
  errorMessage.innerText = "No results match your search. Would you like to suggest a resource?";
  ul.appendChild(errorMessage);
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
  button.classList.add("submit-button");
  button.innerText = "SUBMIT";
  form.addEventListener("submit", postData);
  form.appendChild(button);
  ul.appendChild(form);
}

function postData(event) {
  event.preventDefault();
  var pTag = document.createElement("p");
  var body = document.querySelector("body");
  body.appendChild(pTag);
  var descriptor = document.querySelector(".describe").value;
  var linkage = document.querySelector(".link").value;
  fetch(urlB, {
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
