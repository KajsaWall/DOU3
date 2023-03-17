/*

Vi gör exakt samma sak som vi gjorde i förra övningar men denna
gång ska vi dessutom hålla reda på hur många begäran som varje
div behövde för att till slut få en färg.

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

async function fill_color (div, n = 1) {
    try {
    div.textContent = n;
    const response = await fetch("https://teaching.maumt.se/apis/random_color/");
    const color = await response.json();
    div.style.backgroundColor = color;

    } catch (e) {
        if(e.message.includes("NetworkError")) {
        n++;
        div.textContent = n;
        fill_color(div, n);
            
        } else {
            console.log(e);
        }
    }
}
console.log(document.querySelector("#wrapper").childNodes);
