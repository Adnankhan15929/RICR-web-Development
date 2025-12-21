let b=1,
    c=1,
    g=0,
    s=0,
    sa=0, 
    i=0;

const img = document.getElementById("image");

console.log(img.src);

if(img.src==="http://127.0.0.1:5500/JavaScript/PracticeImageEditor/index.html")
{
    document.getElementById("image").style.display = "none";
}

function uploadImage()
{
    const file = document.getElementById("Upload").files[0];
    const fileUrl = URL.createObjectURL(file);

    document.getElementById("image").src = fileUrl;
    document.getElementById("image").style.display = "block";
    document.getElementById("uploadLabel").style.display = "none";
    applyfilter();
}

function applyfilter(){
    document.getElementById("image").style.filter =`brightness(${b})
                                                    grayscale(${g}%)
                                                    sepia(${s}%)
                                                    saturate(${sa})
                                                    contrast(${c})
                                                    invert(${i}%)`;
}

function changeBrightness()
{
    const value = document.getElementById("brightness").value;
    b = (value*2)/100;
    applyfilter();
}

function changeGrayScale()
{
    const value = document.getElementById("grayscale").value;
    g = value;
    applyfilter();
}
function changeSepia()
{
    const value = document.getElementById("sepia").value;
    s = value;
    applyfilter();
}
function changeSaturate()
{
    const value = document.getElementById("saturate").value;
    sa = (value*2)/100;
    applyfilter();
}
function changeContrast()
{
    const value = document.getElementById("contrast").value;
    c = (value*2)/100;
    applyfilter();
}
function invert()
{
    const value = document.getElementById("invert").value;
    i = value;
    applyfilter();
}

function Reset(){
    b=1,
    c=1,
    g=0,
    s=0,
    sa=0, 
    i=0;
    applyfilter();
    document.getElementById("brightness").value = "50";
    document.getElementById("grayscale").value = "0";
    document.getElementById("sepia").value = "0";
    document.getElementById("saturate").value = "0";
    document.getElementById("contrast").value = "50";
    document.getElementById("invert").value = "0";

}


function download()
{
    if(img.src==="http://127.0.0.1:5500/JavaScript/PracticeImageEditor/index.html")
    {
        alert("Please upload the img");
        return;
    }
    if(!img.complete)
    {
        alert("img upload in progress please wait....")
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = document.getContext("2d");

    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;

    const filter = getComputedStyle(img).filter;

    ctx.filter = filter === "none" ? "none" : filter;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/png");
    const anchorTag = document.createElement("a");

    anchorTag.href = dataURL;
    anchorTag.download = "editedImg.png";

    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);    

}