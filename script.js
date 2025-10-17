let Name = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", function (e) {
  console.log("you clicked");

  e.defaultPrevented;

  let nameVal = Name.value.trim();
  let emailVal = email.value.trim();
  let numberVal = number.value.trim();

  let nameRegex = /^[A-Za-z\s]{2,50}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let numberRegex = /^\d{10}$/;

  if (!nameRegex.test(nameVal)) {
    para.textContent = "Please Enter Perfect Name";
  } else if (!emailRegex.test(emailVal)) {
    para.textContent = "Enter Valid Email ID";
  } else if (!numberRegex.test(numberVal)) {
    para.textContent = "Enter Valid Mobile No.";
    console.log("Anshul");
  } else if ((nameVal, emailVal, numberVal === "")) {
    para.textContent = "Any Field Should Not Be Blank";
  } else {
    alert("your form is successfully filled");
  }
});

win.addEventListener("click", function (event) {
  if (event.key === null) {
    btn.click();
  }
});


