function guessNumber()
{
  const no = document.getElementById("guess").value;
  const rn = Math.floor(Math.random()*10)+1;
  if(no==="")
  {
    alert("ENTER A NUMBER.")
  }
  else if(no>rn)
  {
      alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  }
  else if(no<rn)
  {
       alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  }
  else{
      alert("CONGRATULATION!!! YOU GUESS THE CORRECT NUMBER.");
  }
}
