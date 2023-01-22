
/*

Varje gång vi ber om resursen med URL:et https://maumt.se/dbp/dbp22/chunks_material/resources/color_distribution.php
får vi (random) ett av dessa CSS-färgnamn: limegreen, lightcoral, aqua eller hotpink.

Det som är lurigt är att vi får vissa färgnamn oftare än andra. Övningen går ut på att lista ut hur ofta
vi får varje namn. Med andra ord, om vi ber om resursen 100 gånger, hur många av dessa kommer vi att få limegreen,
hur många lightcoral, etc? Vi ska skriva ett program som ger oss lite insikter i detta.

Varje gång vi klickar på knappen "Check Distribution" ska vi skicka 50 förfrågningar till servern. Allteftersom
förfrågningarna kommer tillbaka till oss så uppdaterar vi "färglådorna". Se video.

Hur du vill ha tips på hur detta kan lösas, se längst ner i denna fil.

(Använd papper och penna för att bilda er en idé om hur detta kan lösas innan ni börjar koda)

/*

I denna lösning använder vi oss av en "hashmap" (eller "hash table").
Det är ett objekt där varje nyckel representerar en färg och där värdet
av nyckeln är hur många gånger vi har fått den färgen 

*/



/*
Ta dessa steg:

1)  Koda funktionen get_distribution som skickar 50 förfrågningar om webbresursen ovan. 
    När get_distribution anropas så skapar den en array av objekt som denna:
        [
          {
            color: "limegreen",
            count: X_LG (där X_LG är antalet gånger vi har fått limegreen från webbresursen)
          },
          {
            color: "lightcoral",
            count: X_LC (där X_LC är antalet gånger vi har fått lightcoral från webbresursen)
          },
          etc.
        ]

    När en förfrågning har besvarats ska arrayen ovan uppdateras. Ni måste lägga till 1 till nyckeln count i rätt array-element.
    Efter uppdateringen ska callback_update (se nedan) anropas med arrayen som parameter.
    Börja med att callback_update bara loggar arrayen.

2)  När du har fått delen ovan att funka ska du ändra callback_update så att den visar innehållet i den grafiskt (färglådorna)
    istället för att bara logga arrayen.

3)  Fixa så att texten i feedback uppdateras på ett korrekt sätt.
    Samma sak vad gäller att knappen ska vara disabled under tiden vi väntar på alla förfrågningar.
    Se video.

*/



