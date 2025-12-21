function calculate(){
    const bA = document.getElementById("billAmount").value;
    if(bA===""){
        alert("Please Enter Bill Amount");
    }
    const p = document.getElementById("persons").value;
    const quality = Number(document.getElementById("select").value);
    const App = (bA/p)*(quality/100);
    let showText = document.getElementById("iCB");
    showText.innerText="Tip Amount\n\n"+App+"₹\neach";
    console.log("Tip Amount\n\n"+App+"₹\neach");
}