INSTRUKTIONER
=============

I denna övning ska ni skapa ett litet API som hanterar användare (users). Detta
API ska bestå av 3 stycken separata PHP-filer (se nedan). Det rekommenderas
varmt att även skapa en separat fil som till exempel innehåller funktioner som
ni kan återanvända. I denna mapp finner ni även filen "users.json" som ni kan
utgå från (där ser ni även då vilka nycklar respektive användare har).


FILER
=====

1. `read.php`:
  - Ett anrop till denna filen (t.ex. "http://localhost:8888/read.php") ska
    returnera alla användare (dvs. som en array).
  - Ett anrop till denna fil med GET-parametern "id" ska endast returnera den
    användare vars ID är detsamma som GET-parametern. Om användaren inte finns
    ska ni returnera ett relevant felmeddelande.
  - Endast HTTP metoden "GET" är tillåten vid anrop till denna filen.

2. `create.php`:
  - Ett anrop till denna filen ska innebära att ni skapa en ny användare.
    Anropet måste bestå av samtliga nycklar en användare har (se JSON-filen)
    förutom "id".
    - När en ny användare skapas (från anropet ovan) ska ni även lägga till ett
      "id", dvs. något som är unik för varje användare (hur ni väljer att göra
      detta är valfritt).
    - När en användare då har skapats ska ni även returnera denna som svaret på
      detta anrop.
    - Om en av nycklarna som krävs för att skapa en användare saknas returnerar
      ni ett relevant felmeddelande.
  - Endast HTTP metoden "POST" är tillåten vid anrop till denna filen.

3. `delete.php`:
  - Ett anrop till denna filen ska innebära att en användare raderas. Anropet
    måste bestå av ett "id" som används för att identifiera vilken användare som
    ska raderas. Om detta saknas, eller om användaren inte finns, ska ni
    returnera ett relevant felmeddelande.
  - Endast HTTP metoden "DELETE" är tillåten vid anrop till denna filen.


TIPS
====

- Gör så mycket ni kan på egen hand och utan att kolla på videosen igen, för att
  se vilka punkter ni behöver repetera.
- Gör en separat PHP-fil som ni kan använda för att testa era anrop.
- Skapa funktioner som hämtar och sparar till er JSON-fil (så ni kan återanvända dessa).
- Börja med att få allting att fungera och fokusera på felmeddelanden efteråt.
- Skapa en fil i taget så att de funktionerna ni skapar kan återanvändas i de
  andra så går det förhoppningsvis snabbare.