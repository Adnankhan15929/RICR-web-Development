function pageAnimation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    opacity:0,
    y:-40,
    duration:0.7,
    delay:0.5,
    stagger:0.15,
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.8
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.8,
    x:200
},"-=1.7")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

// pageAnimation()

var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 78%",
    }
})
tl2.from(".services h3, .services p",{
    y:100,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.15,
})