const input = document.querySelector(".input");
const button = document.querySelector(".button");

function errorState() {
  var valid = true;

  var emailCheck = document.getElementById("email");
  var errorMsg = document.getElementById("errorMsg");

  if (!emailCheck.checkValidity()) {
    errorMsg.innerHTML = "Please provide a Valid email address";
    input.classList.add("input-active");
    errorMsg.classList.add("errorMsg-active");
    button.classList.add("button-active");
    valid = false;
  } else {
    errorMsg.innerHTML = "";
    input.classList.remove("input-active");
    errorMsg.classList.remove("errorMsg-active");
    button.classList.remove("button-active");
  }
  return valid;
}
