var resources = document.querySelector(".resource-list");

var newCard = document.createElement("div");
var cardTitle = document.createElement("h3");
cardTitle.innerText = "This site includes a series of printable comic templates";
var link = document.createElement("a");
link.href = "http://donnayoung.org/art/comics.htm";
link.innerText = "http://donnayoung.org/art/comics.htm";
var preview = document.createElement("img");
preview.id = "thumb";
preview.src = "http://donnayoung.org/art/comics.htm";
newCard.appendChild(cardTitle);
newCard.appendChild(link);
newCard.appendChild(preview);
resources.appendChild(newCard);
