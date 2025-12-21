function Addlist() {
  const content = document.getElementById("listContent").value.trim();
  console.log(content);

  if(content)
  {
    const list = document.createElement("li");
    list.classList.add("d-flex", "p-5", "align-items-center", "border-bottom");
    
    const di = document.createElement("div");
    di.classList.add("w-75");
    di.innerHTML = content;

    const but = document.createElement("button");
    but.classList.add("btn", "btn-danger" ,"ms-3");
    but.innerHTML = '<i class="bi bi-trash"></i> Delete';
    but.onclick=()=>{
        list.remove();
    };

    list.appendChild(di);
    list.appendChild(but);

    document.getElementById("TaskList").appendChild(list);
    document.getElementById("listContent").value = "";


  }
}
