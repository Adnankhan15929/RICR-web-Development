function breakTheText(){
  var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split("")
var halfValue = splittedText.length/2

var clutter = ""

splittedText.forEach(function(e,index){
  // clutter += `<span class="a">${e}</span>`
  if(index<halfValue){
    clutter += `<span class="a">${e}</span>`
  }
  else{
   clutter += `<span class="b">${e}</span>`   
  }
})

h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 .a",{
  y:80,
  duration:0.6,
  stagger:0.15,
  delay:0.5,
  opacity:0
})
gsap.from("h1 .b",{
  y:80,
  duration:0.6,
  stagger:-0.15,
  delay:0.5,
  opacity:0
})