
/*

Nedan ser du en bit kod. Den innehåller samma instruktioner som på videon fast en annan webbresurs.

1)
Det första du ska göra är att lista ut vad denna webbresurs är.
Gör det genom att skriva resurserns URL på webbläsarens adressfält och kolla på vad som visas där.
-Det är en array som ändrar antalet element inuti samt innehållet i elementet varje gång du uppdaterar sidan.

2)
Förhoppningsvis har du listat ut att det handlar om en array av siffror.
Antalet siffror är random (1- 10)
Siffrorna själva är också random (0-99)
-Ja

3)
När funktionen do_this anropas kommer arrayen med siffror (webbresursen) att vara argumentet.
Arrayen läggs i parametern "resource".

4A)
Övningen A går ut på att logga alla siffror på consolen.
Just nu loggas alla på en gång (hela arrayen) men i övnignen ska de loggas en och en.
-Klart

4B)
Övningen B går ut på att skriva ut siffrorna på webbsidan, som videon visar.
-Klar

*/


fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/numbers.php")
  .then(r => r.json())
  .then(do_this);

function do_this (resource) {
let wrapper = document.querySelector("#wrapper");

  array_each(resource, print_number);
  function print_number (number) {
    let new_number = document.createElement("div");
    new_number.textContent=number;
    new_number.classList.add("number_class");
    wrapper.append(new_number);
  }

  console.log(resource);
}

/*
function f1 (array) {
  for(number of array) {
    let new_number = document.createElement("div");
    new_number.textContent = number;
    new_number.classList.add("number_class");
    wrapper.append(new_number);
    console.log(number);
  }
}
*/
