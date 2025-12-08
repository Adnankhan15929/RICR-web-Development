function SubmitForm() {
  const personName = document.getElementById("personName").value;
  const contactNumber = document.getElementById("contactNumber").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("qualification").value;
  const clg = document.getElementById("clg").value;
  const year = document.getElementById("year").value;
  const branch = document.getElementById("branch").value;
  const FullStack = document.getElementById("FullStack").value;
  const DataScience = document.getElementById("DataScience").value;
  const Data = document.getElementById("Data").value;
  const Business = document.getElementById("Business").value;
  const java = document.getElementById("java").value;
  const Python = document.getElementById("Python").value;
  const c = document.getElementById("c").value;
  const Other = document.getElementById("Other").value;
  const Source = document.getElementById("Source").value;
  const Executive = document.getElementById("Executive").value;

  alert(
    "Registration Completed ! Thank You for Registration we get Your Details Please wait some Time...."
  );
  
  console.log("Name: ",personName);
  console.log("Contact Number: ",contactNumber);
  console.log("Email: ",email);
  console.log("Qualification: ",qualification);
  console.log("School/College: ",clg);
  console.log("Year: ",year);
  console.log("Branch: ",branch);
  console.log("Full Stack Web Development: ",FullStack);
  console.log("Data Science with Python: ",DataScience);
  console.log("Data Analytics with Python: ",Data);
  console.log("Business Analyst: ",Business);
  console.log("Java Programming: ",java);
  console.log("Python Programming: ",Python);
  console.log("C/C++ Programming: ",c);
  console.log("Other: ",Other);
  console.log("Source of Information: ",Source);
  console.log("Name of Executive: ",Executive);

  document.getElementById("personName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("clg").value = "";
  document.getElementById("year").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("FullStack").value = "";
  document.getElementById("DataScience").value = "";
  document.getElementById("Data").value = "";
  document.getElementById("Business").value = "";
  document.getElementById("java").value = "";
  document.getElementById("Python").value = "";
  document.getElementById("c").value = "";
  document.getElementById("Other").value = "";
  document.getElementById("Source").value = "";
  document.getElementById("Executive").value = "";
}

function submit()
{
    const batch = document.querySelectorAll("input[name='batch']:checked");
    console.log(batch);
}

function cb()
{
    alert("Thank you for contacting us")
}