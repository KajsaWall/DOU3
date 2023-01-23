
/*

  Vi kommer i denna övning att jobba mot tre resurser:
  A)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=X&country=Y
      är ett (random) djur från databasen som är av typen X och finns i landet Y.
  B)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=X
      är ett (random) djur från databasen som är av typen X och finns i något land (vilket som helst).
  C)  Resursen https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?country=Y
      är ett (random) djur från databasen som finns i landet Y och är av någon typ (vilken som helst).


  Denna version (v1) av resursen har endast ett fåtal djur.
  Den har bara djur av typen Insect, Mammal och Fish.
  Den har bara djur från Sweden, Spain och Kenya.

  Den har bara två/tre djur av varje kombination (tre Mammals från Spain, två Insects från Sverige, etc).

  Resursen är ett json-objekt. Studera hur det är strukturerat genom att skicka
  en giltig förfrågan från webbläsarens adressfält.

*/


/*
    1)  Skriv en funktion f1 som, när den anropas, skickar en förfrågan om ett
        däggdjur (Mammal) från Spain. Namnet på djuret ska visas på showdiv1.
*/
function f1 () {
    const rqst = new Request ("https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=Mammal&country=Spain");
    fetch(rqst)
        .then(r => r.json())
        .then(resource => {
            console.log(resource.animal.name);
            document.querySelector("#showdiv1").textContent = resource.animal.name;
        });
}




/*
    2)  Skriv en funktion f2 som tar emot två argument (kind, country). När funktionen anropas skickas en förfrågan om ett
        djur av typen kind och som finns i landet country. Namnet på djuret ska visas på showdiv1.
        Funktionen ska kontrollera, innan förfrågan skickas, att både kind och country är giltiga, dvs att de finns på
        databasen. Med andra ord, kind måste vara antingen Insect, Mammal eller Fish och country måste vara 
        antingen Sweden, Spain eller Kenya.
*/

function f2 (kind, country) {
    const rqst = new Request (`https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=${kind}&country=${country}`);
    fetch(rqst)
        .then(r => r.json())
        .then(resource => {
            console.log(resource);
            document.querySelector("#showdiv1").textContent = resource.animal.name;

        });
}
f2("Mammal", "Sweden");