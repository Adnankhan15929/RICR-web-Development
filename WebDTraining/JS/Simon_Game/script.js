let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "pink"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
       document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
  }
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randcolor = btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  gameFlash(randbtn);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function btnPress() {
  let btn = this;
  let userColor = btn.getAttribute("id"); 
  userSeq.push(userColor);
  userFlash(btn);
  checkAns(userSeq.length - 1);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
