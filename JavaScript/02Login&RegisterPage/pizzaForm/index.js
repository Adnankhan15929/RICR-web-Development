function submitOrder()
{
    console.log("Submit Button Clicked");

    const fn= document.getElementById("fname").value;
    const ln= document.getElementById("lname").value;
    const em= document.getElementById("email").value;
    const no= document.getElementById("number").value;
    const date= document.getElementById("Date").value;


    const f1= document.getElementById("Hawaiian").value;
    const f12= document.getElementById("HawaiianOpt").value;
    const f2= document.getElementById("Pepperoni").value;
    const f22= document.getElementById("PepperoniOpt").value;
    const f3= document.getElementById("Vegetable").value;
    const f32= document.getElementById("VegetableOpt").value;


    const cn= document.getElementById("creditNumber").value;
    const pin= document.getElementById("Pin").value;
    const additionalNote= document.getElementById("additionalNote").value;


    console.log("First Name : ",fn);
    console.log("Last Name : ",ln);
    console.log("Email : ",em);
    console.log("Number : ",no);
    console.log("Date : ",date);
    // console.log("Size : ",size);
    console.log("Hawaiian : ",f1);
    console.log("Hawaiian Quantity: ",f12);
    console.log("Pepperoni : ",f2);
    console.log("Pepperoni Quantity: ",f22);
    console.log("Vegetable : ",f3);
    console.log("Vegetable Quantity: ",f32);

    console.log("Credit Card Number : ",cn);
    console.log("PIN : ",pin);
    console.log("Additional Note : ",additionalNote);

    alert("Submit Done");



    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("Date").value="";


    document.getElementById("Hawaiian").value="";
    document.getElementById("HawaiianOpt").value="";
    document.getElementById("Pepperoni").value="";
    document.getElementById("PepperoniOpt").value="";
    document.getElementById("Vegetable").value="";
    document.getElementById("VegetableOpt").value="";


    document.getElementById("creditNumber").value="";
    document.getElementById("Pin").value="";
    document.getElementById("additionalNote").value="";
}
