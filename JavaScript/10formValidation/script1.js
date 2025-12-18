function submit()
{
    const nm=document.getElementById("fullname").value.trim();
    const em=document.getElementById("email").value.trim();
    const ph=document.getElementById("Phone").value.trim();
    const dob=document.getElementById("dob").value.trim();
    document.querySelectorAll(".Error").forEach((element)=>{
        element.innerHTML="";
    });

    if(!nm)
    {
        document.getElementById("NameE").innerText="*Required";
        return;
    }
    else if(!/^[A-Za-z ]+$/.test(nm))
    {
        document.getElementById("NameE").innerText="Only Alphabet and Spaces are allowed";
        return;
    }

    if(!em)
    {
        document.getElementById("EmailE").innerText="*Required";
        return;
    }
    else if(!/^[\w\.]+@(gmail|ricr|yahoo|outlook)\.(com|in|co.in)$/.test(em))
    {
        document.getElementById("EmailE").innerText="Use Proper Email Format";
        return;
    }

    if(!ph)
    {
        document.getElementById("PhoneE").innerText="*Required";
        return;
    }
    else if(!/^[6-9]\d{9}$/.test(ph))
    {
        document.getElementById("PhoneE").innerText="Only Indian Numbers Allowed";
        return;
    }

    if(!dob)
    {
        document.getElementById("dobE").innerText="*Required";
        return;
    }
    else{
        const currentyear = new Date().getFullYear();
        const birthyear = Number(dob.split("-")[0]);
        if(currentyear-birthyear<17)
        {
            document.getElementById("dobE").innerText="You must be 18 years Old";
            return;
        }
    }

    const data =
    {
        FullName: nm,
        Email: em,
        Phone: ph, 
        DateOfBirth:dob
    };
    console.log(data);
}