gsap.registerPlugin(SplitText);
const split = SplitText.create(".text", { type: "chars" });

gsap.from(split.chars, {
  y: -300, opacity: 0,
  stagger: 0.5, duration: 0.8,
  ease: "bounce.out"
});