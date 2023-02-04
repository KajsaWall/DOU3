/*

Denna resurs har vi sett tidigare. Den ger oss en (random) av 147 färger som har ett CSS-namn:
https://teaching.maumt.se/apis/random_color/?all&bullet
Tack vare &bullet så svarar den lite snabbare också :-).

Som i en tidigare övning ska du se till att sidan fylls med 100 (10x10) färglådor
i olika färger. Flera lådor kan ha samma färg.

Övningen ska lösas med hjälp av en funktion som returnerar en resurs (färgen) och
utan att använda någon global variabel.

*/

const request = new Request ("https://teaching.maumt.se/apis/random_color/?all&bullet");


get_one_color(0);

async function make_color (color) {
        let div = document.createElement("div");
        div.style.backgroundColor = color;
        document.querySelector("#wrapper").append(div);
}

async function get_one_color (counter) {
    
    const response = await fetch(request);
    const resource = await response.json();
    make_color(resource);
    
    counter++;
    if(counter < 100) {
        get_one_color(counter);
    }
}