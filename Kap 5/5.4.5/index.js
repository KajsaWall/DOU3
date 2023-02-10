/*

Denna resurs ger oss en random färg:
https://teaching.maumt.se/apis/random_color/?all&bullet

Denna resurs ger oss en array med alla färger som man kan få med resursen ovan
https://teaching.maumt.se/apis/random_color/?all&list


Det vore såklart enkelt att bara loopa igenom arrayen vi får och visa alla
färger som finns i den. Men det är inte särskilt lärorikt.

Det intressanta här är att försöka lista ut ett sätt att få alla färger 
genom att fetcha första resursen så många gånger som det behövs.

Eftersom det är 147 färger så har jag skapat en grid på 21 rader och 7 kolumner.

*/
const list_request = new Request("https://teaching.maumt.se/apis/random_color/?all&list");

fetch(list_request)
    .then(r => r.json())
    .then(list => {
        get_one_color(list, 1);
    });

function get_one_color (list, attempts) {
    const request = new Request("https://teaching.maumt.se/apis/random_color/?all&bullet");
    fetch(request)
    .then(r => r.json())
    .then(color => {
        let index = list.indexOf(color);
        if(index !== -1) {
            make_color(color, list.length, attempts);
            list.splice(index, 1);
            attempts = 0;
        }
        if(list.length) {
            attempts++;
            get_one_color(list, attempts);
        }
    });
}


function make_color (color, count, attempts) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.textContent = `(${count}) ${color} (${attempts})`;
  
    // Append
    document.getElementById("wrapper").appendChild(div);
  }
  