let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

// music.play();
let h2=document.querySelector('h2');
const checkWin = ()=>{
  let btn = document.getElementsByClassName('btn');
  let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
  wins.forEach(e =>{
      if((btn[e[0]].innerText === btn[e[1]].innerText) && (btn[e[2]].innerText === btn[e[1]].innerText) && (btn[e[0]].innerText !== "") ){
         
         h2.innerText=`Player ${btn[e[0]].innerText} won`;
         gameover.play();
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
         
      }
  })
}
function checkDraw() {
  let btn = document.getElementsByClassName('btn');
  let isDraw = Array.from(btn).every((button) => button.innerText !== "");
  if (isDraw) {
    h2.innerText = "It's a draw!";
    gameover.play();
  }
}

 
let turn = "X";
function changeTurn() {
  return turn === "X" ? "O" : "X";
}
let btns = document.querySelectorAll(".btn");
 
for (btn of btns) {
  btn.addEventListener("click", btnpress); 
}

function btnpress() {
  let btn = this;
  audioTurn.play();
  if (btn.innerHTML === "") {
    btn.innerText = turn;
    turn = changeTurn();
    h2.innerText=`Player ${turn} Turn`;
  
  checkWin();
  checkDraw();
}
}
function reset(){
  for(btn of btns)
  {
    btn.innerText="";
  }
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
  turn="X";
  h2.innerText="Player X Turn";
}

let res=document.getElementById('reset');
res.addEventListener("click",reset);