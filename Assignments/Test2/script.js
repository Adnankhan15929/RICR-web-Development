async function dat() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  let k = 0;
  for (let j = 0; j <= 3; j++) {
    for (let i = k; i <= 19; i++) {
      document.getElementById(j).innerHTML += `
            <div class="card">
            <img src="${data[i].image}" alt="img" id="img"/>
            <div class="card-body">
                <h5 class="card-title" id="title">${data[i].title}<h5/>
                <h6 id="category"> ${data[i].category}<h6/>
                <p class="card-text" id="description">${data[i].description}
                <br/>
                <span id="price">${data[i].price}<span/>
                <br/>
                <span id="rating">${data[i].rating}<span/>
                <p/>
            <div/>
            <div/>`;
      if (i == 4 || i == 9 || i == 14) {
        k = i;
        k++;
        break;
      }
    }
  }
}

const homeb = document.getElementById("homeb");

homeb.addEventListener("click",()=>{
    dat()}
);