let poularcities = [
  {id : 1 , name :"کرج"},
  {id : 2 , name :"تهران"},
  {id : 3 , name :"شیراز"},
  {id : 4 , name :"رشت"}
];

if (!localStorage.getItem("cities")){
  localStorage.setItem("cities" , JSON.stringify( poularcities));
}

let localStoragecities = JSON.parse(localStorage.getItem("cities"));

function rendercities(cities){
  let contcitie = document.querySelector(".city-div");
  contcitie.innerHTML="";

  cities.forEach(city => {
    let div = document.createElement("div");
    div.textContent = city.name;
    div.className = "popular-city";

    div.addEventListener("click" ,()=>{
      localStorage.setItem("selectedCityId",city.id);
      window.location.href = "/mainpage.html";
    });
    contcitie.appendChild(div);
  });
}

function search(cities){
  let searchtext = document.getElementById("search").value.trim().toLowerCase();

  let filtertext = cities.filter(city =>
    city.name.toLowerCase().includes(searchtext)
  );

  rendercities(filtertext);
}

document.getElementById("search").addEventListener("input", ()=>{
  search(localStoragecities);
});

rendercities(localStoragecities);