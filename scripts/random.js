const url = "https://stark-scrubland-13367.herokuapp.com/";
var ul = document.querySelector("ul");
var button = document.querySelector("button");
button.addEventListener("click", goHome);
var randomData;

function goHome() {
  location.href = "index.html";
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
fetch(url)
  .then(response => response.json())
  .then(function(response) {
    let resources = response;
    randomData = resources[Math.floor(Math.random() * resources.length)];
    populateList(randomData);
  })
  .catch(console.error);
