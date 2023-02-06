let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  checkInputs();
  if (
    email.parentElement.classList.contains("right") &&
    password.parentElement.classList.contains("right")
  ) {
    return true;
  } else {
    e.preventDefault();
  }
});

function checkInputs() {
  //get input's value
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  if (emailValue === "") {
    //show wrong
    //add wrong class
    setWrongFor(email, "Emali cannot be blank !");
  } else if (!isEmail(emailValue)) {
    // reg exp not valid
    setWrongFor(email, "Emali is not valid !");
  } else {
    //add right class
    setRightFor(email, "Email valid ");
  }

  if (passwordValue === "") {
    //show wrong
    setWrongFor(password, "Password cannot be blank !");
  } else if (passwordValue.length < 8) {
    //show wrong
    setWrongFor(password, "Password cannot be Less than 8 characters");
  } else if (passwordValue.length > 20) {
    //show wrong
    setWrongFor(password, "Password cannot be more than 20 characters");
  } else {
    //show right
    setRightFor(password, "valid input ");
  }
}

function setWrongFor(input, message) {
  let formControll = input.parentElement;
  let p = formControll.querySelector("p");

  //add wrong class
  formControll.classList.add("wrong");
  formControll.classList.remove("right");

  //show wrong
  p.innerHTML = message;
}

function setRightFor(input, message) {
  let formControll = input.parentElement;
  let p = formControll.querySelector("p");

  //add right class
  formControll.classList.add("right");
  formControll.classList.remove("wrong");

  // show right

  p.innerHTML = message;
}

function isEmail(email) {
  let test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  return test;
}

email.addEventListener("keypress", function (e) {
  email.parentElement.className = "form-controll";
});

password.addEventListener("keypress", function (e) {
  password.parentElement.className = "form-controll";
});
