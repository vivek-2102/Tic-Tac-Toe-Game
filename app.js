let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

// music.play();
const checkWin = ()=>{
  let boxtext = document.getElementsByClassName('btn');
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
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
         let h2=document.querySelector('h2');
         h2.innerText=`Player ${boxtext[e[0]].innerText} won`;
         gameover.play();
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
         
      }
  })
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
  }
  checkWin();
}

function reset(){
  for(btn of btns)
  {
    btn.innerText="";
  }
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
}

let res=document.getElementById('reset');
res.addEventListener("click",reset);