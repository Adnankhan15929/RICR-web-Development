const URL =
  "https://official-joke-api.appspot.com/jokes/random";

const facts = document.getElementById("jokes");

const getFacts = async () => {
  console.log("getting data . .....");
  let response = await fetch(URL);
  console.log(response); //JSON format
  // console.log(response.status);
  let data = await response.json();
  console.log(data);
  facts.innerText= data.setup;
};
