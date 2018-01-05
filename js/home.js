var searchButton = document.querySelector(".submit-button");

searchButton.addEventListener("click", navigateList);

function navigateList (event){
  console.log("the function is running");
  event.preventDefault();
  location.href = "list.html";
}
