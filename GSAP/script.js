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

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})