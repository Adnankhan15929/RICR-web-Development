function Clear() {
  location.reload();
}

function Calculate() {
  let bA = document.getElementById("bill").value;
  console.log("bill:", bA);

  if (bA <= 0) {
    document.getElementById("sp").innerText = "*Invalid value";
  }
  
  else if (bA <= 50 && bA > 0) {
    document.getElementById("sp").innerText = "";
    bA = bA * 0.5;
  } 
  
  else if (bA > 50 && bA <= 200) {
    document.getElementById("sp").innerText = "";
    bA=bA-50;
    bA = (50*0.5)+bA*0.75;
  } 
  
  else if (bA > 200 && bA <= 450) {
    document.getElementById("sp").innerText = "";
    bA = bA-200;
    bA = bA * 1.2+(50*0.5)+(150*0.75);
  } 
  
  else {
    document.getElementById("sp").innerText = "";
    bA = bA-450;
    bA = bA * 1.5+(50*0.5)+(150*0.75)+(250*1.2);
  }
  let total = bA*0.2;
  document.getElementById(
    "content"
  ).innerText = `Subtotal (before surcharge): ${bA.toFixed(2)}
    Surcharge amount: ${total.toFixed(2)}
    Grand total: ${(bA + total).toFixed(2)}`;

    console.log(`Subtotal (before surcharge): ${bA.toFixed(2)}
Surcharge amount: ${total.toFixed(2)}
Grand total: ${(bA + total).toFixed(2)}`);
}
