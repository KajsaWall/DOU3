/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

*/
const request = new Request ("https://teaching.maumt.se/apis/random_color/?all&bullet");

let counter = 0;

fetch(request)
    .then(r => r.json())
    .then(make_box);

function make_box (color) {
    let new_div = document.createElement("div");
    new_div.style.backgroundColor = color;
    document.querySelector("#wrapper").append(new_div);

    let free_cells = [];
    

    counter++;
    if(counter < 120) {
    fetch(request)
        .then(r => r.json())
        .then(make_box);
    }

    
}