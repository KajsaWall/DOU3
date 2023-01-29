
/*

Webbresursen https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=X
är ett random ord (ganska få ord att välja mellan) av typen X, där X kan vara:
  adjektiv. Då får man ett ord som: "fina", "sura", etc.
  adverb. Då får man ett ord som: "fort", "säkert", etc
  omstandighet. Då får man ett ord som: "på gatan", "hemma", etc.
  pronom. Då får man ett ord som: "de", "mina", "dina", etc.
  substantiv. Då får man ett ord som: "hundarna", "katterna", etc
  verb. Då får man ett ord som: "gick", "vandrade", etc

Resursen är av typen "text".

Studera HTML-koden. Det finns fyra divs med klassen ".showdiv". De har olika id.
Funktionerna nedan (showdiv1, showdiv2, etc) kan användas för att skriva ut på var och en av 
divsen.


*/

function showdiv1 (a) { document.querySelector("#showdiv1").textContent = a; }
function showdiv2 (a) { document.querySelector("#showdiv2").textContent = a; }
function showdiv3 (a) { document.querySelector("#showdiv3").textContent = a; }

/*
    1)  Skriv en function f1 som, när den anropas, skickar en förfrågan om ett adjektiv.
        När resursen (ordet) har kommit ska det stå på showdiv1.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/
function f1 () {
    const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adjektiv");
    fetch(rqst)
        .then(r => r.text())
        .then(showdiv1);
}
f1();
/*
    2)  Skriv en function f2 som, när den anropas, skickar en förfrågan om ett verb.
        När resursen (ordet) har kommit ska det stå på showdiv2.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/
function f2 () {
    const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb");
    fetch(rqst)
        .then(r => r.text())
        .then(showdiv2);
}
f2();
/*
    3)  Skriv en function f3 som, när den anropas, skickar en förfrågan om ett substantiv och en annan om ett verb.
        Verbet ska visas på showdiv2 och substantivet på showdiv 3.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/
function f3 () {
    
    const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb")
        fetch(rqst)
            .then(r => r.text())
            .then(showdiv2);
    const rqst2 = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv")
        fetch(rqst2)
            .then(r => r.text())
            .then(showdiv3);
    }
f3();

/*
    4)  Skriv en function f4 som, när den anropas, skickar en förfrågan om ett substantiv, en annan om ett verb
        och en sista om ett adverb.
        När resurserna har kommit ska de visas på showdiv1 (substantiv), showdiv2 (verb) och showdiv3 (adverb).
        De MÅSTE alltid visas i ordning! Först substantivet, sedan verbet och sist adverbet.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/
function f4 () {
    const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv");
    fetch(rqst)
        .then(r => r.text())
        .then(showdiv1);
    const rqst2 = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb");
    fetch(rqst2)
        .then(r => r.text())
        .then(showdiv2);
    const rqst3 = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adverb");
    fetch(rqst3)
        .then(r => r.text())
        .then(showdiv3);
}
f4();
