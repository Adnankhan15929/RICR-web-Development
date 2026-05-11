// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });
// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//   console.log("ul was clicked");
// });
// for (li of lis) {

//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was click");
//   });
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector("ul");
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  list.appendChild(item);
  inp.value = "";
});

let delbtns = document.querySelectorAll('.delete');
for (delbt of delbtns){
    delbt.addEventListener('click',function(){
        let par = delbt.parentElement;
        par.remove();
    })
}