let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ['yellow','red','purple','black']
let h2 = document.querySelector('h2');
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameFlash(randbtn);
}
function btnPress(){
    let btn = this;
    console.log(this);
    userFlash(btn);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userFlash(){
    btn.classList.add('userflash');
    setTimeout(function (){
        btn.classList.remove('userflash')
    },250)
}