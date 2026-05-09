// let btns = document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick = sayhello;
//     btn.onmouseenter = function(){
//         console.log("heelo dear");
//     }
//     console.log("btn was clicked");
// }

// function sayhello(){
//     alert("hello");
// }
// function sayName(){
//     alert("Adnan");
// }




// //EventListener
// for(btn of btns){
//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("dbclick",sayName);
// }



// let btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     let h3 = document.querySelector('h1');
//     let div = document.querySelector('div');
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     div.style.backgroundColor=randomColor;
//     console.log('color updated');
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }



// let p = document.querySelector('p');
// p.addEventListener('click',function(){
//     console.log("para was clicked");
// })

// let box = document.querySelector('.box');
// box.addEventListener('mouseenter',function(){
//     console.log("mouse inside box");
// })


// let btn  = document.querySelector('button');
// btn.addEventListener("click",function(event){
//     console.log(event)
// });

// let inp = document.querySelector('input');
// inp.addEventListener('keyup',function(event){
//     console.log(event);
//     console.log(event.code);
//     console.log(event.key);
//     console.log("key was pressed");
// })



//form
// let form = document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault(); //no action perform due to prevent default
//     console.dir(form);
//     // let user = document.querySelector('#name');
//     // let pass = document.querySelector('#pass');
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hello dear ${user.value}`)
// })


// let user = document.querySelector('#name');
// user.addEventListener('change',function(){
//     console.log('input changed');
//     console.log("final value = ",this.value);
// })
// user.addEventListener('input',function(){
//     console.log('input changed');
//     console.log("final value = ",this.value);
// })


// let inp = document.querySelector('input');
// inp.addEventListener('input',function(){
//     console.log(inp.value);
//     let p = document.querySelector('p');
//     p.innerText = inp.value;
// })


let h1 = document.querySelector('h1');
let inp = document.querySelector('input');
inp.addEventListener('input',function(){
    if(inp.value.match(/^[a-zA-Z\s-]+$/)){
        h1.innerText = inp.value;
    }
})