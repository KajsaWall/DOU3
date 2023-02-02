/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

Jag har skapat en lösning där man kan ändra antalet rader och kolumner i gridden som
ska fyllas med färgade celler.
Det går bra om ni föredrar att koda en lösning med ett fast antal rader och kolumner.

*/
function random_number(max) {
    // Returnerar en random siffra mellan 0 och max - 1
    return Math.floor(max * Math.random());
  }

let free_spots = [];
document.querySelector("button").addEventListener("click", fill_colors);

function fill_colors () {
    document.querySelector("button").setAttribute("disabled", true);

    document.querySelectorAll("#wrapper .color").forEach(div => div.remove());

    for(let row = 1; row <= 11; row++) {
        for(let col = 1; col <= 11; col++) {
            if(row === 6 && col === 6) {
                continue;
            }
            free_spots.push({row: row, col: col});
        }
    }
    get_one_color();
}

function get_one_color () {
    const request = new Request ("https://teaching.maumt.se/apis/random_color/?all&bullet");
    fetch(request)
        .then(r => r.json())
        .then(color => {
            const random_index = random_number(free_spots.length);
            const current_spot = free_spots
                                .splice(random_index, 1)[0];
            create_box(color, current_spot);

            if(free_spots.length > 0) {
                get_one_color(free_spots);
            } else {
                document.querySelector("button").removeAttribute("disabled");
                document.querySelector("button").textContent = "NEW";
            }
        });
}

function create_box (color, spot) {
    let new_div = document.createElement("div");
    new_div.classList.add("color");
    new_div.style.backgroundColor = color;
    new_div.style.gridArea = `${spot.row} / ${spot.col}`;
    document.querySelector("#wrapper").append(new_div);
}