/*
Dessa resurser finns:
https://teaching.maumt.se/apis/attractions/?attraction=X
https://teaching.maumt.se/apis/attractions/?city=Y
https://teaching.maumt.se/apis/attractions/?country=Z

Där X måste vara en av följande: Lavapies, Templo_de_Debod, Fontana_di_trevi, Pantheon, Brandenburger_Tor 
eller Kreuzberg.
Notera underscore i namnen ovan.

Y måste vara någon av följande: Madrid, Rome eller Berlin.

Z måste vara någon av följande: Spain, Italy, Germany

Koda en sida som fungerar som den på videon.


Hur gör man för att fånga eventet "användaren har tryckt på Enter"?
1) Vi anger event-handlers med .addEventListener("event_namnet", funktion)
2) "funktion" är event-handler i detta fall
3) När eventet sker (click, keyup, keydown, etc) så anropas event-handler (funktion)
4) Event-handlern anropas med ett särskilt event-objekt som argument.
5) Vi brukar inte göra något med den så våra event-handlers brukar inte ta emot något argument.
   De brukar se ut så här:
        något_element.addEventListener("keyup", () => { funktionskoden })
   Funktionen som vi i exemplet ovan har angett som event-handler deklareras på plats
   med arrow-format. Som ni ser tar den inte emot något argument.
   Men den anropas med ett argument!
6) Om ni tar emot argumentet kan ni logga det på consolen och studera det.
        något_element.addEventListener("keyup", (event_object) => { console.log(event_object) })
7) Hitta nyckeln "key" i event_object
8) Kolla vad det får för värde när ni trycker på olika tangenter, inklusive Enter-tangenten.
9) Nu kan ni kanske lista ut hur ni kan veta när användaren har tryckt på Enter :-)

Om ni inte lyckas med detta så kan ni skapa en knapp (bredvid input-fältet) där det står 
"SEARCH" och som sätter igång första fetch. Längre ned i denna fil kan ni annars
se hur jag har fixat det.
 function attraction_print(attraction_resource) {
    if(attraction_resource.name.includes("_")) {
      for(let bokstav of attraction_resource.name) {
        if(bokstav === "_"){
          bokstav = "K";
        }
        return bokstav;
      }
      console.log(attraction_resource.name);
    };
*/

document.querySelector("input").addEventListener("keyup", keyup);

function keyup (event) {
  if(event.key === "Enter") {
    fetch_attraction(event.target.value);
  }
}

function fetch_attraction (resource) {

  let attraction = "";
  console.log(resource);
  if(resource.includes(" ")){
    for(let bokstav of resource) {
      if(bokstav === " ") {
        bokstav = "_";
      }
      attraction = attraction + bokstav;
    }
    console.log(attraction);
  }

  let attraction_request = new Request (`https://teaching.maumt.se/apis/attractions/?attraction=${attraction}`);
  fetch(attraction_request)
    .then(r => r.json())
    .then(resource_attraction => {

      console.log(resource_attraction);
      document.querySelector(".attraction_name").textContent = resource;
      document.querySelector(".attraction_info").textContent = resource_attraction.info;

      let city_request = new Request (`https://teaching.maumt.se/apis/attractions/?city=${resource_attraction.city}`);
      fetch(city_request)
        .then(r => r.json())
        .then(resource_city => {
          document.querySelector(".city").textContent = resource_city.name;
          document.querySelector(".city_info").textContent = resource_city.info;

          let country_request = new Request (`https://teaching.maumt.se/apis/attractions/?country=${resource_city.country}`);
          fetch(country_request)
          .then(r => r.json())
          .then(country_resource => {
            document.querySelector(".country").textContent = country_resource.name;
            document.querySelector(".country_info").textContent = country_resource.info;
          })
        })
  });

}
  
    




















































