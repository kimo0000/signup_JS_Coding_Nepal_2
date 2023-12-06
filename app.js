const email = document.querySelector(".mail input");
const password = document.querySelector(".pass input");
const confirmPass = document.querySelector(".confirm input");
const tools = document.querySelectorAll(".tools");
const eyePass = document.querySelector(".eye_pass");
const eyeConfirm = document.querySelector(".eye_confirm");
const signup = document.querySelector(".signup");

let validEmail = /\w+@\w+.(com|net|fr)/g;
let validPass = /[a-zA-Z0-9]/g;
let validSymbol = /[@*+-.;,]/;

email.addEventListener("input", () => {
  if (validEmail.test(email.value)) {
    tools[0].style.display = "none";
    password.disabled = false;
  } else {
    tools[0].style.display = "block";
    password.disabled = true;
  }
});

password.addEventListener("keyup", () => {
  if (
    validPass.test(password.value) &&
    password.value.length >= 8 &&
    validSymbol.test(password.value)
  ) {
    tools[1].style.display = "none";
    confirmPass.disabled = false;
  } else {
    tools[1].style.display = "block";
    confirmPass.disabled = true;
  }
});

confirmPass.addEventListener("input", () => {
  if (password.value === confirmPass.value) {
    tools[2].style.display = "none";
  } else {
    tools[2].style.display = "block";
  }
});

signup.addEventListener("click", () => {
  tools.forEach((tool) => {
    if (email.value == "" && password.value == "" && confirmPass.value == "") {
      tool.classList.add("show");
    } else {
      tool.classList.remove("show");
    }
  });
});

eyePass.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  eyePass.className =
    password.type === "password"
      ? "fa-regular fa-eye-slash eye_pass"
      : "fa-regular fa-eye eye_pass";
});

eyeConfirm.addEventListener("click", () => {
  confirmPass.type = confirmPass.type === "password" ? "text" : "password";
  eyeConfirm.className =
    confirmPass.type === "password"
      ? "fa-regular fa-eye-slash eye_pass"
      : "fa-regular fa-eye eye_pass";
});
