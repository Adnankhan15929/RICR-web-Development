// let pencil = 10;
// let pen = 12;
// // console.log("the total price is "+pencil+pen);
// let output = `The total is : ${pencil+pen} Rupees.`;
// console.log(output);

// alert("asjdfjasdkfj");
// console.error("sdafasdfasiufo");
// console.warn("sdafasdfasiufo");

// let name = prompt("Enter your name: ");
// console.log(name);

// let first = prompt("Enter your name:");
// console.log("Welcome"+first);
// console.error("Error"+first);
// console.error("Error",first);

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(name+" is "+age+" years old.");

// let q=Number(prompt("Enter your quarter:"));
// switch(q){
//     case 1:
//         console.log("j, f, m");
//         break
//     case 2:
//         console.log("amj");
//         break;
//     case 3:
//         console.log("jas");
//         break;
//     case 4:
//         console.log("ond");
//         break;
//     default:
//         console.log("invalid");
//         break;
// }

// let h = "       jaskfjaskdlj            ";
// console.log(h);
// console.log(typeof h);
// h=h.trim();
// console.log(h);
// console.log(typeof h);

// let n="adnan khan";
// console.log(n);
// n=n.toUpperCase();
// console.log(n);
// n=n.toLowerCase();
// console.log(n);

// let a="welcome";
// console.log(a.indexOf("l"));
// console.log(a.indexOf("p"));

// let k="     asdfsdf asdfasd      ";
// console.log(k.toUpperCase().trim());

// let para = "adnan";
// console.log(para.slice(0));
// console.log(para.slice(2));
// console.log(para.slice(-1));
// console.log(para.slice(-3,5));
// console.log(para.slice(3,5));

// let name="Adnan khan";
// console.log(name.replace("khan","pahtan"));
// console.log(name.replace("k","p"));
// console.log(name.repeat(3));

// let arr = [1,23,4];
// console.log(arr);

// let cars = ["bmw","royalenfield"];
// cars.push("hmalaena");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("bansdnas");
// console.log(cars);
// cars.shift();
// console.log(cars);

// let p = ["323","adnan","234",23];
// console.log(p.includes(323));
// console.log(p.includes("adnan"));

// let p = ["323","adnan","234",23];
// let d=[23,34,12,"nsadf","wer"];
// console.log(p.concat(d));
// console.log(d.reverse());
// console.log(d);

// let colors=["red","yellow","black"];
// console.log(colors.splice(1));
// console.log(colors);
// colors=["red","yellow","black"];
// console.log(colors.splice(0,1));
// console.log(colors);
// console.log(colors.splice(1,2));
// console.log(colors);
// colors=["red","yellow","black"];
// console.log(colors.splice(1,2,"asdfas","asdfasdf"));
// console.log(colors);
// console.log(colors.splice(1,0,"mercedes"));
// console.log(colors);
// console.log(colors.splice(1,1,"BMW"));
// console.log(colors);

// let d=["red","yellow","black"];
// console.log(d);
// d.sort();
// console.log(d);

// let pq = ["jan","jul","mar","aug"];
// console.log(pq);
// pq.splice(0,2, "july","june");
// console.log(pq);

// let lan= ["c","c++","hmtl","javascrit","python","java"];
// console.log(lan.reverse().indexOf("javascrit"));

// let arr = [["x",null,"0"],[null,"x",null],["0",null,"x"]];
// console.log(arr);
// arr[0][1]="0";
// console.log(arr);

// let fav = 'dhoom3';
// let guess= prompt("Guess the movie");
// while((guess!=fav)&& (guess!='quit')){
//     alert("Wrong movie guess");
//     guess=prompt("Guess the movie");
// }
// if(guess==fav){
//     alert("You guess the right movie");
// }
// else{
//     alert("You quit the game");
// }

// let fruits = ["banana","mango","apple","kiwi"];

// for(i of fruits){
//     console.log(i);
// }

// for(char of fruits){
//     console.log(char);
// }

// let todo = [];
// let req = prompt("plz enter your request");
// while (true) {
//   if (req == "quit") {
//     console.log("quittting app");
//     break;
//   }
//   if (req == "list") {
//     console.log("---------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(task[i]);
//     }
//     console.log("------------");
//   }
//   if (req == "add") {
//     let task = prompt("Enter the task");
//     todo.push(task);
//     console.log("task added");
//   }
//   if (req == "delete") {
//     let idx = prompt("please enter the task index");
//     todo.splice(idx, 3);
//     console.log("task delted");
//   }
// }

let arr = [1, 2, 3, 4, 5, 5, 8, 76, 0];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (num != arr[i]) {
    arr.splice(i, 1);
  }
}
console.log(arr);

let student = {
  name: "adnan",
  age: 23,
  marks: 90,
  city: "bhopal",
};

const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

// const classinfo = {
//   adnan: {
//     name: "adnan",
//     city: "bhopal",
//   },
//   ibaad: {
//     name: "ullah",
//     city: "afzal colony",
//   },
//   khan: {
//     name: "pathan",
//     city: "jhangirabad",
//   },
// };

// const classinfo = [
//   { name: "afdsa", id: 123 },
//   { name: "ullah", city: "afzal colony" },
//   { name: "pahd", city: "areara colony" },
// ];

// const max = prompt ("Enter the max num");

// const random = Math.floor(Math.random()*max);

// let guess = prompt("guess the number")

// while(true){
//     if(guess =="quit"){
//         break;
//     }
//     if(guess==random){
//         console.log("right");
//         break;
//     }
//     else if(guess<random){
//         guess = prompt("ur guess is to small")
//     }
//     else{
//         guess=prompt("ur to large")
//     }
// }

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

const car = {
  name: "fortuner",
  model: 2023,
  color: "black",
};
console.log(car.name);

const person = {
  name: "adnan",
  age: 20,
  city: "Madhya pradesh",
};
console.log(person);
person.city = "New York";
person.country = "United States";
console.log(person);

let number = 10;

let arr45 = [5, 34, 2, 67, 4, 2, 5, 45, 57, 34];

function a(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      console.log(arr[i]);
    }
  }
}

a(number, arr45);

let str1 = "abcdefffjejiorewrnmiweqpiomzxcxzcjkashlu";
let ans="";
function ar(str,ans) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (ans.indexOf(char) == -1) {
      ans += char;
    }
  }
  return ans;
}
console.log(ar(str1,ans));


let country = ["Australia","Germany","United State of America"];
let ans1;
function c(c,a){
    let max;
    let ind;
    for(let i=0; i<c.length; i++){
        let l=c[i].length;
         ind = i;
        if(l>max){
            ind=i;
            max=l;
        }
    }
    a = c[ind];
    return a;
}
console.log(c(country,ans1));


function countVowels(str){
    let co=0;
    for(let i=0 ; i<str.length; i++){
        if(str.charAt(i)=='u' || str.charAt(i)=='o' || str.charAt(i)=='i' || str.charAt(i)=='e' || str.charAt(i)=='a'){
            co++;
        }
    }
    return co;
}
let st = "aeughj"
console.log(countVowels(st));



console.log("----------------------------");
let start = 100;
let end = 200;
function ran(s,e) {
    let diff = e-s;
    return Math.floor(Math.random()*diff)+s;
}

console.log(ran(start,end));