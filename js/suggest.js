var ul = document.querySelector("ul");
var home = document.querySelector(".home");
var suggestions = document.querySelector(".suggestions");
const url = "https://stark-scrubland-13367.herokuapp.com/sugggestions";
home.addEventListener("click", goHome);
function goHome() {
  console.log("function is GO");
  location.href = "index.html";
}

noresults();

function noresults() {
  var errorMessage = document.createElement("p");
  errorMessage.innerText = "Would you like to suggest a resource?";
  errorMessage.classList.add("subhead");
  suggestions.appendChild(errorMessage);
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
  suggestions.appendChild(form);
}
function postData() {
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
    .then(function(response) {
      if (response.error) {
        console.log("Error");
      }
    })
    .catch(console.error);
}
