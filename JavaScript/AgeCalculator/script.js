function check(){
    let Input = document.getElementById("dob").value;
    let dobY = Number(Input.slice(0,4));
    let dobM = Number(Input.slice(5,7));
    let dobD = Number(Input.slice(8));

    // console.log(dobY);
    // console.log(dobM);
    // console.log(dobD);

    let currentDateOfBirth  = document.getElementById("cdob").value;
    let cdobY = Number(currentDateOfBirth.slice(0,4));
    let cdobM = Number(currentDateOfBirth.slice(5,7));
    let cdobD = Number(currentDateOfBirth.slice(8));

    // console.log(cdobY);
    // console.log(cdobM);
    // console.log(cdobD);

    let y=0,m=0,d=0;
    
    for(let i =dobY; i<cdobY; i++)
    {

        if(dobY>=cdobY)
        {
            alert("Wrong information!");
        }
        y++;
    }
    let showText = document.getElementById("show");
    showText.innerText="Your age is "+y+" years.";
    console.log("Your age is "+y+" years.");
}