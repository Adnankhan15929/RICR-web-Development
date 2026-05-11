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

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delbtn = document.createElement("button");
//   delbtn.innerText = "delete";
//   delbtn.classList.add("delete");

//   item.appendChild(delbtn);
//   ul.appendChild(item);
//   inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//     console.log(event.target);
//   if (event.target.nodeName == "BUTTON") {
//     let ulItem = event.target.parentElement;
//     ulItem.remove();
//   }
// });


