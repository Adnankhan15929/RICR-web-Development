let b = 1,c=1,g=0,s=0,i=0;

const img = document.getElementById("image").src;

console.log(img);

if (img === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}


function uploadImage() {
  const file = document.getElementById("Upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
}

function applyfilter()
{
    document.getElementById("image").style.filter =`brightness(${b})
                                                    contrast(${c})
                                                    grayscale(${g}) 
                                                    sepia(${s})`;
}

function changeBrightness(){
    const value =  document.getElementById("Brightness").value;
    b=value*2/100;
    applyfilter();
}


function changeContrast(){
    const value =  document.getElementById("Contrast").value;
    c=value*2/100;
    applyfilter();
}


function changeGrayscale(){
    const value =  document.getElementById("grayscale").value;
    g=value*2/100;
    applyfilter();
}


function changeSepia(){
    const value =  document.getElementById("sepia").value;
    s=value;
}


function changeSaturate(){
    const value =  document.getElementById("saturate").value;
    document.getElementById("image").style.filter=`saturate(${value*2/100})`
}


function changeHuerotate(){
    const value =  document.getElementById("huerotate").value;
    document.getElementById("image").style.filter=`hue-rotate(${value*2/100})`
}


function changeBlur(){
    const value =  document.getElementById("blur").value;
    document.getElementById("image").style.filter=`blur(${value*2/100})`
}


function changeInvert(){
    const value =  document.getElementById("invert").value;
    document.getElementById("image").style.filter=`invert(${value*2/100})`
}