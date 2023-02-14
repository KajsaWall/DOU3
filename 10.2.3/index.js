/*

Vi fortsätter.

Nu ska ni, när allting är klart (eller under tiden, som ni föredrar), visa på sidan
hur många begäran vi behövde göra per div, i snitt.

För er som verkligen inte gillar matte: snittet = summan av alla begäran / antalet divar

I denna övningen får ni använda globala variabler men forstfarande samma anrop.

*/


// Your global variables need to go before the start-up call (go()).
// Otherwise they won't be of any use.
let n_requests = 0;
let n_filled_divs = 0;
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
    n_requests++;
    div.textContent = n;
    const response = await fetch("https://teaching.maumt.se/apis/random_color/");
    const color = await response.json();
    n_filled_divs++;
    div.style.backgroundColor = color;

    if(n_filled_divs === 100) {
        document.getElementById("average").textContent = `
        ${n_requests / 100} requests per div, in average
        `;
        document.getElementById("average").classList.add("visible");
    }

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
