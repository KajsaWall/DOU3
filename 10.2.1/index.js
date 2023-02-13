/*

Som bekant kan vi få NetworkError om vi skickar för många begäran på en gång.
I denna övning ska vi bygga en sida som inte klappar ihop om detta händer.

Ni ska koda en sida som fyller fönstret med 100 (10x10) stycken divar.
För varje div ska vi hämta en random color (parallellt!) från vår kära resurs:
https://teaching.maumt.se/apis/random_color/


När nätverket bråkar och ger oss NetworkError för en av divarna så ska ni se till
att "catcha" error och automatiskt skicka en ny begäran så att ni kan fylla
diven med färgen som ni, förr eller senare, får som resurs.

Det hela ska starta med anropet nedan.

*/


go(10, 10); // Argument: n_columns, n_rows

function go (n_columns, n_rows) {
    const count_divs = n_rows * n_columns;

    for(let i = 0; i < count_divs; i++) {
        const div = document.createElement("div");
        document.getElementById("wrapper").append(div);
        fill_color(div);
    }
}

async function fill_color (div) {
    try {
    const response = await fetch("https://teaching.maumt.se/apis/random_color/");
    const color = await response.json();
    div.style.backgroundColor = color;

    } catch (e) {
        console.log(e.message);
        if(e.message.includes("NetworkError")) {
            fill_color(div);
        } else {
            console.log(e);
        }
    }
}