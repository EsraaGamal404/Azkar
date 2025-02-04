document.getElementById("switch").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
};


document.getElementById("toggle-nav-menu").onclick = () => {
  document.getElementById("nav-menu").classList.toggle("open");
};


fetch(`https://www.myjsons.com/v/b7d03829`)
.then((response) =>response.json())
.then((data) =>{
  console.log(data);
  let morning = "";
  for (let i=0; i < data["ازكار الصباح"].length; i++){
    morning +=`
    <li><p><span>${data["ازكار الصباح"][i].content}</span> <span class="number">(${data["ازكار الصباح"][i].count})</span></p>
    </li>`;
  }
  document.getElementById("morning-list").innerHTML = morning;
})