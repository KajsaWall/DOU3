
/*

Ändra argumentet till fetch-funktionen så att det blir en förfrågan (request) istället för en sträng.
Vi är dock intresserade av att hämta samma webbresurs. 

 */

const rqst = new Request("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php");

fetch(rqst)
  .then(r => r.text())
  .then(countup);


function countup (resource) {
for (let i = 0; i < resource; i++) {
  document.querySelector("body > div").innerHTML += `<div>${i}</div>`;
}
}

