// let p = document.createElement('p');
// p.innerText="Hey im red!";
// let body= document.querySelector('body');
// body.prepend(p);
// p.classList.add("classRed");


// let h3 = document.createElement('h3');
// h3.innerText="im a blue h3";
// body.prepend(h3);
// h3.classList.add("classBlue");

// let div = document.createElement('div');
// body.prepend(div);
// div.classList.add('di');

// let h1 = document.createElement('h1');
// h1.innerText="im in a div";
// let p1 = document.createElement('p');
// p1.innerText="ME TOO!";
// div.prepend(h1);
// div.prepend(p1);


// Practice qus
let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText="Click me"
document.querySelector('body').appendChild(inp);
document.querySelector('body').appendChild(btn);

inp.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

document.querySelector('button').classList.add("sty");


let h1= document.createElement('h1');
document.querySelector('body').appendChild(h1);
h1.innerText="DOM Practice";
h1.classList.add('h1style');

let p1= document.createElement('p');
p1.innerHTML="apna college <b>Delta</b> practice";
document.querySelector('body').appendChild(p1);
