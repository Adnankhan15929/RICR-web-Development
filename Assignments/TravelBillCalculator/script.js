function Clear() {
  location.reload();
}

let total=0;
function Calculate() {
  let km= Number(document.getElementById("bill").value);
  if (km < 0 || km==="") {
    document.getElementById("sp").innerText = "*Please enter a non-negative number of kilometres";
  }
  else
  {
    console.log("Kilometers Covered:", km);
    let kmh = Number(km/2);
    total+=km*kmh;
    document.getElementById(
    "content"
  ).innerText = `Total Bill = Rs. ${total}`;

    document.getElementById(
    "content1"
  ).innerText += `${(km)+" km x Rs."+(kmh)+" = Rs."+(km*kmh)+", "}`;


      
    console.log(`Total Bill = Rs. ${km+kmh}`);
  }
}
