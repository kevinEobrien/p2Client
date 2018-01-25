const url = "https://stark-scrubland-13367.herokuapp.com/";
var ul = document.querySelector("ul");
var button = document.querySelector("button");
button.addEventListener("click", goHome);

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
    var list = response;
    var choices = [list[0], list[5], list[10]];
    choices.forEach(function(choice) {
      populateList(choice);
    });
  })
  .catch(console.error);
