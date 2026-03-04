function pageAnimation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    opacity: 0,
    y: -40,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.3");
  
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.4");

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
    ease: "back.out(1.7)",
  }, "-=0.2");

  tl.from(".center-part2 img", {
    opacity: 0,
    duration: 0.8,
    x: 200,
    ease: "power3.out",
  }, "-=0.5");

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.3");
}

function pageAnimation2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 70%",
      end: "top -5%",
      scrub: 2,
    },
  });

  tl2.from(".services h3, .services p", {
    y: 100,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });

  tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "anim1");
  
  tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "anim1");

  tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "anim2");
  
  tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "anim2");
}

pageAnimation();
pageAnimation2();