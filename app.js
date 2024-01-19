let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let reset=document.querySelector('#reset');
reset.addEventListener("click",()=>{
  location.reload();
})

let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = [];
}
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", btnpress);
}
let count = 0;
let h2 = document.querySelector("h2");

function btnpress() {
  audioTurn.play();
  let btn = this;
  count++;
  btn.classList.add("addColor");
  let str = btn.innerText;
  let x = Number(str[0]);
  let y = Number(str[1]);
  if (str == "X" || str == "O") {
    alert("Cannot play that move");
    count--;
  }
  

  else if (count % 2 == 0) {
    arr[x][y] = "X";
    btn.innerText = "X";
    h2.innerText = "Player O Turn";
  } else {
    arr[x][y] = "O";
    btn.innerText = "O";
    h2.innerText = "Player X Turn";
  }
  if (winsTheGame()) {
    gameover.play();
    if (count % 2 == 0) h2.innerText = "Game Over Player X Wins";
    else h2.innerText = "Game Over Player O Wins";
     
  }
}

let countx = 0;
let counto = 0;
function winsTheGame() {
  for (let j = 0; j <= 2; j++) {
    for (let i = 0; i <= 2; i++) {
      if (arr[j][i] == "X") countx++;
      else if (arr[j][i] == "O") counto++;
    }
    if (countx == 3) {
      console.log("X wins");
      return true;
    } else if (counto == 3) {
      console.log("O wins");
      return true;
    }
    countx = 0;
    counto = 0;
  }
  for (let j = 0; j <= 2; j++) {
    for (let i = 0; i <= 2; i++) {
      if (arr[i][j] == "X") countx++;
      else if (arr[i][j] == "O") counto++;
    }
    if (countx == 3) {
      console.log("X wins");
      return true;
    } else if (counto == 3) {
      console.log("O wins");
      return true;
    }
    countx = 0;
    counto = 0;
  }

  if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
    console.log("X wins");
    return true;
  } else if (arr[0][0] == "O" && arr[1][1] == "O" && arr[2][2] == "O") {
    console.log("O wins");
    return true;
  } else if (arr[0][2] == "X" && arr[1][1] == "X" && arr[2][0] == "X") {
    console.log("X wins");
    return true;
  } else if (arr[0][2] == "O" && arr[1][1] == "O" && arr[2][0] == "O") {
    console.log("O wins");
    return true;
  }
}
