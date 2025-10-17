let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let btn = document.querySelectorAll("button");
let opt = document.querySelector("#option");
let opt2 = document.querySelector("#option2");
let randomNum = Math.floor(Math.random() * 3) + 1;
let com = document.getElementById("compout");
let win = document.getElementById("win");
let info = document.getElementById("info");
let states = document.getElementById("status");

// let arr=Array.from(btn)

// btn.forEach(function(button){
//     button.addEventListener("click", function(){

//         if(button.g)

//     })
// })

stone.addEventListener("click", function () {
  info.style.display = "none";
  opt2.textContent = "You Choose";
  opt.textContent = "Stone";

  if (randomNum === 1) {
    states.textContent = "You Won";
    win.textContent = "🎉";
    com.textContent = "Computer Choose Scissor 😞";
    console.log("You Selected Stone");
    console.log("You Win 🎉");
  } else {
    states.textContent = "You Loss";
    win.textContent = "😞";
    com.textContent = "Computer Choose Paper 🎉";
    console.log("You Selected Stone");
    console.log("You Win 🎉");
  }
});


paper.addEventListener("click", function () {
  info.style.display = "none";
  opt2.textContent = "You Choose";
  opt.textContent = "Stone";

  if (randomNum === 2) {
    states.textContent = "You Won";
    win.textContent = "🎉";
    com.textContent = "Computer Choose Stone 😞";
    console.log("You Selected Paper");
    console.log("You Win 🎉");
  } else {
    states.textContent = "You Loss";
    win.textContent = "😞";
    com.textContent = "Computer Choose Scissor 🎉";
    console.log("You Selected Paper");
    console.log("You Win 🎉");
  }
});

scissor.addEventListener("click", function () {
  info.style.display = "none";
  opt2.textContent = "You Choose";
  opt.textContent = "Stone";

  if (randomNum === 3) {
    states.textContent = "You Won";
    win.textContent = "🎉";
    com.textContent = "Computer Choose Paper 😞";
    console.log("You Selected Scissor");
    console.log("You Win 🎉");
  } else {
    states.textContent = "You Loss";
    win.textContent = "😞";
    com.textContent = "Computer Choose Stone 🎉";
    console.log("You Selected Paper");
    console.log("You Win 🎉");
  }
});

console.log(randomNum);
