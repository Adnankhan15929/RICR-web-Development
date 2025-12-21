function Clear() {
  location.reload();
}
function CalculateSalary() 
{
  let salary= Number(document.getElementById("bill").value);
  if (salary <=0 || salary==="") {
    document.getElementById("sp").innerText = "*Invalid Salary";
    document.getElementById("content").innerText="";
    return;
  }
  else{
    document.getElementById("sp").innerText = "";
    let HRA=salary/2,DA=salary/2;
    document.getElementById("content").innerText=`Basic Salary: ${salary},
HRA: ${HRA},
DA: ${DA},
Gross Salary: ${HRA+DA+salary}`;
   
    console.log(`Basic Salary: ${salary},
HRA: ${HRA},
DA: ${DA},
Gross Salary: ${HRA+DA+salary}`);
  }
}