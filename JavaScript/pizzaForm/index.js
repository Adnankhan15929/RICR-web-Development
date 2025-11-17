function submitOrder()
{
    console.log("Submit Button Clicked");

    const fn= document.getElementById("fname").value;
    const ln= document.getElementById("lname").value;
    const em= document.getElementById("email").value;
    const no= document.getElementById("number").value;
    const date= document.getElementById("Date").value;
    const size= document.getElementById("Size").value;
    const flavor= document.getElementById("Flavor").value;



    const cn= document.getElementById("creditNumber").value;
    const pin= document.getElementById("Pin").value;
    const additionalNote= document.getElementById("additionalNote").value;
    const submitOrder= document.getElementById("submitOrder").value;


    console.log("First Name : ",fn);
    console.log("Last Name : ",ln);
    console.log("Email : ",em);
    console.log("Date : ",date);
    console.log("Size : ",size);
    console.log("Flavor : ",size);

    console.log("Credit Card Number : ",cn);
    console.log("PIN : ",pin);
    console.log("Additional Note : ",additionalNote);
    console.log("Submit Order : ",submitOrder);

    alert("Submit Done");

    document.getElementById("pizzaForm").value="";
}
