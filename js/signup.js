let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("re-password");

form.addEventListener("submit", function (e) {
  checkInputs();

  if (
    fname.parentElement.classList.contains("right") &&
    lname.parentElement.classList.contains("right") &&
    email.parentElement.classList.contains("right") &&
    password.parentElement.classList.contains("right") &&
    password2.parentElement.classList.contains("right")
  ) {
    return true;
  } else {
    e.preventDefault();
  }
});

function checkInputs() {
  //get input's value
  let fnameValue = fname.value.trim();
  let lnameValue = lname.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  if (fnameValue === "") {
    //show wrong
    //add wrong class
    setWrongFor(fname, "Input cannot be blank !");
  } else {
    //show right
    //add right class
    setRightFor(fname, "Input valid");
  }

  if (lnameValue === "") {
    setWrongFor(lname, "Input cannot be blank !");
  } else {
    setRightFor(lname, "Input valid");
  }

  if (emailValue === "") {
    setWrongFor(email, "Email cannot be empty !");
  } else if (!isEmail(emailValue)) {
    setWrongFor(email, "Emali is not valid !");
  } else {
    setRightFor(email, "Email Valid");
  }

  if (passwordValue === "") {
    setWrongFor(password, "password cannot be blank !");
  } else if (passwordValue.length < 8) {
    setWrongFor(password, "password cannot be less than 8 characters !");
  } else if (passwordValue.length > 20) {
    setWrongFor(password, "password cannot be more than 20 characters !");
  } else {
    setRightFor(password, "password valid");
  }

  if (password2Value === "") {
    setWrongFor(password2, "password cannot be blank !");
  } else if (password2Value !== passwordValue) {
    setWrongFor(password2, "password doesnot match");
  } else {
    setRightFor(password2, "password valid");
  }
}

function setWrongFor(input, meesage) {
  let formControll = input.parentElement;
  let p = formControll.querySelector("p");
  //add wrong class
  formControll.classList.add("wrong");
  formControll.classList.remove("right");
  //show wrong
  p.innerHTML = meesage;
}

function setRightFor(input, message) {
  let formControll = input.parentElement;
  let p = formControll.querySelector("p");
  //add right class
  formControll.classList.add("right");
  formControll.classList.remove("wrong");
  //show right
  p.innerHTML = message;
}

function isEmail(email) {
  let test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  return test;
}

////features

fname.addEventListener("keypress", function () {
  fname.parentElement.className = "form-controll";
});

lname.addEventListener("keypress", function () {
  lname.parentElement.className = "form-controll";
});

email.addEventListener("keypress", function (e) {
  email.parentElement.className = "form-controll";
});

password.addEventListener("keypress", function () {
  password.parentElement.className = "form-controll";
});

password2.addEventListener("keypress", function () {
  password2.parentElement.className = "form-controll";
});
