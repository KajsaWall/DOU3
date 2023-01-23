
/*

Webbresursen https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=X
är ett random ord (ganska få ord att välja mellan) av typen X, där X kan vara:
  adjektiv. Då får man ett ord som: "fina", "sura", etc.
  adverb. Då får man ett ord som: "fort", "säkert", etc
  omstandighet. Då får man ett ord som: "på gatan", "hemma", etc.
  pronom. Då får man ett ord som: "alla", "mina", "dina", etc.
  substantiv. Då får man ett ord som: "hundar", "katter", etc
  verb. Då får man ett ord som: "gick", "vandrade", etc

Resursen är av typen "text".

*/


/*
    1)  När användaren klickar på knappen "Ny Sats" ska du, med hjälp av webbresurserna ovan
        skriva en sats i showdiv1. Satsen ska alltid bestå av:
        substantiv + verb + adverb
        i den ordningen.

        Förra övningen skulle lösas genom att uteslutande använda funktionerna showdiv1 och
        getdiv1 för att interagera med divven. Det gjorde att vi måste skicka förfrågningarna om
        substantiv, verb och adverb i ordning.

        I denna övning har du fria händer vad gäller den interaktionen och innehållet i showdiv1.
        Istället måste du skicka alla förfrågningar på en gång. Koden för det finns redan skriven
        och måste användas.
        Hur löser du problemet att resurserna kan komma i vilken ordning som helst
        men måste visas i ordning i showdiv?   

        Längst ner i denna fil finns det en liten tips som förhoppningsvis hjälper om du har fastnat.

        Du måste fixa CSS själv.
*/

document.querySelector("button").addEventListener("click", nysats);
function nysats () {
  //document.querySelector(".showdiv").innerHTML = ``;

  document.querySelector("#showdiv1").innerHTML = `
  <span id="substantiv"></span> <span id="verb"></span> <span id="adverb"></span>
  `;

  const request_substantiv = new Request("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv");
  const request_verb = new Request("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb");
  const request_adverb = new Request("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adverb");

  // Fyll i argumenten i then-metoderna.
  // Fetch-anropen ska vara där de är nu. De får INTE placeras inuti metoder,
  // andra funktioner, if-satser etc.
  // Det går dock bra att skapa andra funktioner vid sidan om nysats.
  // Det går också bra att lägga till instruktioner i funktionen nysats.

  function fill (what, word) {
    document.querySelector(`#showdiv1 > #${what}`).textContent = word; 
  }

  fetch(request_substantiv)
  .then(r => r.text())
  .then(resource => {
    fill("substantiv", resource);
  });

  fetch(request_verb)
  .then(r => r.text())
  .then(resource => {
    fill("verb", resource);
  });

  fetch(request_adverb)
  .then(r => r.text())
  .then(resource => {
    fill("adverb", resource);
  });

}





  /*
  fetch(request_substantiv)
    .then(r => r.text())
    .then(resource => {
      let substantiv = document.createElement("p");
      substantiv.textContent = resource;
      document.querySelector(".showdiv").append(substantiv);
    });

  fetch(request_verb)
    .then(r => r.text())
    .then(resource => {
      let verb = document.createElement("p");
      verb.textContent = resource;
      document.querySelector(".showdiv").append(verb);
    });

  fetch(request_adverb)
    .then(r => r.text())
    .then(resource => {
      let adverb = document.createElement("p");
      adverb.textContent = resource;
      document.querySelector(".showdiv").append(adverb);
    });
  
}
*/









































/*

TIPS
Du får ju skapa nya element inuti #showdiv1
Fler tips längre ner.

*/














































/*

TIPS
Vad händer om vi skapar ett HTML-element för varje satsdel (substantiv, verb, adverb) inuti #showdiv1
och placerar dessa element i rätt ordning?
Då kan vi ju fylla dem i vilken ordning som helst, de kommer alltid att visas i rätt ordning.

*/