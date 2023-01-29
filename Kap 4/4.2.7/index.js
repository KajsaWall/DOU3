
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
    1)
    
    Det finns redan en div #user_input med två input-fält.
    När användaren klickar på "FETCH ANIMAL" ska koden skicka en förfrågan där argumenten är
    tagna från input-fälten. Ett för country och ett för kind.
    Namnet på djuret vi får från servern ska visas i showdiv1.

    Användaren kan skriva fel på input fältet eller ange ett land eller typ som inte finns i DB.
    I denna övning (2) ska vi kontrollera responsen och informera användaren om status.
    Notera att vi alltid får en resurs, även om vi kanske inte får ett djur.

    Studera vad som händer om:
    - Landet du söker på inte finns is DB (bara Sweden, Spain och Kenya finns)
    Vi får ett 404 felmeddelande och country () not found.
    - Typen av djur du söker på inte finns (bara Insect, Mammal och Fish finns)
    Samma sak
    - Du anger inga parametrar (vare sig land eller typ)
    felmeddelande 400 bas request, bad request. missing parameters

    Antecka vilket status responsen har i alla dessa olika fall.
    Anteckna även hur resursen ser ut i alla dessa fall.

    Ditt program ska, som tidigare, skicka en förfrågan där country och kind kommer från input-fälten.
    Nu ska den dock informera användaren hur förfrågan gick genom att (se index.html):
    1) visa värdet av "message" i .message
    2) visa värdet av responsens status i .status

*/

    function show_div (resource) {
        const text = resource.animal ? resource.animal.name : "-";
        document.querySelector("#showdiv1").textContent = text;
    }

    function status_code (response) {
        document.querySelector("#feedback .status").textContent = "Response Status Code: " + response.status;    
    }

    function status_message (resource) {
        document.querySelector("#feedback .message").textContent = resource.message;    
    }

  
  document.querySelector("button").addEventListener("click", fetch_animal);
  function fetch_animal () {
  
    const country = document.querySelector("input[name=country]").value;
    const kind = document.querySelector("input[name=kind]").value;
  
    const request = new Request(`https://www.maumt.se/dbp/dbp22/chunks_material/resources/world_animals.v1.php?kind=${kind}&country=${country}`);
    fetch(request)
      .then(response => {
        status_code(response);
        return response.json();
      })
      .then(resource => {
        show_div(resource);
        status_message(resource);
        console.log(resource);
      });
  
  }