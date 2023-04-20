// document.addEventListener("keydown", function (event) {
//     if (event.code == "Key") {
//     }
// });

document.addEventListener("keydown", function (event) {
  let a;
  if (event.code == "KeyE") {
    a = 1;
  }
  if (event.code == "KeyQ" && a == 1) {
    console.log(12);
  }
});

//2
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ" && event.shiftKey == true) {
    document.querySelector("div").style.background = "blue";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.code == "KeyQ" || event.keyCode == 16) {
    document.querySelector("div").style.background = "green";
  }
});

//3
document.addEventListener("keydown", function (event) {
  document.querySelector("#output").textContent += event.key;
});

// 4
let a = 0;
document.querySelector("#count").textContent = a;
document.addEventListener("keydown", function (event) {
  ++a;
  document.querySelector("#count").textContent = a;
});

//5
document.addEventListener("keydown", function (event) {
  document.querySelector("#result").textContent = event.key;
});
document.addEventListener("keyup", function (event) {
  document.querySelector("#result").textContent = "";
});

//6
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 16) {
    document.querySelector("#test_shift").style.fontSize = "2em";
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 16) {
    document.querySelector("#test_shift").style.fontSize = "";
  }
});

//7
let myDiv = document.querySelector("#div")


document.querySelector("#button1").addEventListener("click", function (event) {
  if (event.shiftKey == true) {
    myDiv.style.fontSize = getComputedStyle(myDiv).fontSize.slice(0,-2)*1 + 2 + "px"
  }
});
document.querySelector("#button2").addEventListener("click", function (event) {
  if (event.shiftKey == true) {
    myDiv.style.fontSize = getComputedStyle(myDiv).fontSize.slice(0,-2)*1 - 2 + "px"
  }
});
