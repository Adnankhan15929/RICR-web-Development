// gsap.to("#box",{
//     x:1000,
//     y:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:2,
//     backgroundColor:"red",
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true
// })

// var tl = gsap.timeline()

// tl.from("h2",{
//     y:-20,
//     opacity:0,
//     duration:1,
//     delay:0.3
// })

// tl.from("h4",{
//     y:-20,
//     opacity:0,
//     duration:1,
//     stagger:0.3,
// })

// tl.from("h1",{
//     y:20,
//     opacity:0,
//     duration:0.5,
//     scale:0.5,
// })

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     rotate:720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         pin:true,
//     }
// })

// gsap.to("#page2 h1",{
//     Transform:"translateX(-150%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -150%",
//         scrub:2,
//         pin:true,

//     }
// })

// var path = `M 10 100 Q 500 100 990 100`;

// var finalPath = `M 10 100 Q 500 100 990 100`;

// var string = document.querySelector("#string");

// string.addEventListener("mousemove", function (dets) {
//   path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

//   gsap.to("svg path", {
//     attr: { d: path },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// });

// string.addEventListener("mouseleave", function () {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: "elastic.out(1,0.2)",
//   });
// });



// var main = document.querySelector("#main");
// var cursor = document.querySelector("#cursor");

// main.addEventListener("mousemove",function(dets){
//   gsap.to(cursor,{
//     x:dets.x,
//     y:dets.y,
//     duration:1,
//     ease:"back.out"
//   })
// })



// var main = document.querySelector("#main");
// var cursor = document.querySelector("#cursor");
// var imageDiv = document.querySelector("#image")

// main.addEventListener("mousemove",function(dets){
// console.log(dets)
//   gsap.to(cursor,{
//     x:dets.x,
//     y:dets.y,
//     duration:0.6,
//   })
// })
// imageDiv.addEventListener("mouseenter",function(){
//   cursor.innerHTML= "View More"
//   gsap.to(cursor,{
//     scale:4,
//     backgroundColor:"#ffffff8a"
//   })
// })
// imageDiv.addEventListener("mouseleave",function(){
//   cursor.innerHTML= ""
//   gsap.to(cursor,{
//     scale:1,
//     backgroundColor:"white"
//   })
// })



var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
  right:0,
  duration:0.6,
})
tl.from("#full h4",{
  x:150,
  stagger:0.2,
  opacity:0,
})
tl.from("#full i",{
  opacity:0,
})

tl.pause()

menu.addEventListener("click",function(){
  tl.play() 
})
cross.addEventListener("click",function(){
  tl.reverse()  
})