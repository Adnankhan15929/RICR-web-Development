let b = 1,
    c=1,
    g=0,
    s=0,
    i=0
    sa=0;

const img = document.getElementById("image");

console.log(img.src);

if (img.src === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}


function uploadImage() {
  const file = document.getElementById("Upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
  applyfilter();
}

function applyfilter()
{
    document.getElementById("image").style.filter =`brightness(${b})
                                                    contrast(${c})
                                                    grayscale(${g}%) 
                                                    sepia(${s}%)
                                                    saturate(${sa})
                                                    invert(${i}%)`;
}

function changeBrightness(){
    const value =  document.getElementById("Brightness").value;
    b=(value*2)/100;
    applyfilter();
}


function changeContrast(){
    const value =  document.getElementById("Contrast").value;
    c=(value*2)/100;
    applyfilter();
}


function changeGrayscale(){
    const value =  document.getElementById("grayscale").value;
    g=value;
    applyfilter();
}


function changeSepia(){
    const value =  document.getElementById("sepia").value;
    s=value;
    applyfilter();
}


function changeSaturate(){
    const value =  document.getElementById("saturate").value;
    sa=(value*2)/100;
    applyfilter();
}


function changeInvert(){
    const value =  document.getElementById("invert").value;
    i=value;
    applyfilter();
}

function reset(){
    b=1;
    c=1;
    g=0;
    s=0;
    sa=0;
    i=0;

    applyfilter();
    document.getElementById("Brightness").value = "50";
    document.getElementById("Contrast").value = "50";
    document.getElementById("sepia").value = "0";
    document.getElementById("saturate").value = "0";
    document.getElementById("invert").value = "0";
    document.getElementById("grayscale").value = "0";
    
}

function download()
{
    if(img.src === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html")
    {
        alert("Please Upload the Image First");
        return;
    }

    if(!img.complete)
    {
        alert("Image Upload is in Progress. Please wait....");
        return;
    }

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    //fetch the original width and height of the image 
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const filter = getComputedStyle(img).filter;

    ctx.filter = filter === "none" ? "none" : filter;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/png");

    const anchorTag = document.createElement("a");

    anchorTag.href = dataURL;

    anchorTag.download = "editedImage.png";

    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);
}