function login(){
    console.log("Login Button Clicked");

    const em= document.getElementById("loginEmail").value;
    const ps= document.getElementById("loginConfirmPassword").value;
    console.log("Email : ",em);
    console.log("Password : ",ps);

    alert("Login Done");

    document.getElementById("loginEmail").value="";
    document.getElementById("loginConfirmPassword").value="";
}


function registration()
{
    console.log("Registration Button Clicked");

    const name= document.getElementById("registerName").value;
    const email= document.getElementById("registerEmail").value;
    const createP= document.getElementById("registerCreatePassword").value;
    const confirmP= document.getElementById("registerConfirmPassword").value;
    console.log("Name : ",name);
    console.log("Email : ",email);
    console.log("Password : ",createP);
    console.log("Connfirm Password : ",confirmP);

    alert("Register Done");

    document.getElementById("registerName").value="";  
    document.getElementById("registerEmail").value="";
    document.getElementById("registerCreatePassword").value="";
    document.getElementById("registerConfirmPassword").value="";
    
}

