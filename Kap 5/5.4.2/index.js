
/*

Samma resurs som i förra övningen:
https://teaching.maumt.se/apis/random_color/?all&bullet

Eftersom det ska finnas en knapp mitt i så kan det inte vara en 10x10 grid.
Kör istället med en 11x11 grid.

*/

document.getElementById("wrapper").addEventListener("click", event_function);

function event_function(event) {
    document.querySelector("#wrapper").innerHTML= `<button id="button_start">GET</button>`;
    document.getElementById("button_start").setAttribute("disabled", true);

get_one_color(0);

function get_one_color(counter) {

    const color_request = ("https://teaching.maumt.se/apis/random_color/?all&bullet");
        fetch(color_request)
        .then(r => r.json())
        .then(resource => {

        print_color(resource);

        counter++

        if(counter < 120) {
            get_one_color(counter);
        } else if (counter === 120) {
            document.querySelector("button").textContent = "NEW";
            document.getElementById("button_start").removeAttribute("disabled");
        } 
    }) 
}


}

function print_color(color_name) {
    let new_div = document.createElement("div");
    new_div.style.backgroundColor = color_name;
    document.querySelector("#wrapper").append(new_div);
}

/*
fill_colors();
function fill_colors (flag_colors = false) {
    const text = document.getElementById("button_start").textContent;
    document.getElementById("wrapper").innerHTML = `<button id="button_start">${text}</button>`;
    document.getElementById("button_start").addEventListener("click", fill_colors);
        if(flag_colors) {
            get_one_color(0);
            document.getElementById("button_start").setAttribute("disabled", true);
        }
}

function make_color (color) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    document.getElementById("wrapper").append(div);
}

function get_one_color (counter) {
    const request = ("https://teaching.maumt.se/apis/random_color/?all&bullet");
    fetch(request)
        .then(r => r.json())
        .then(color => {

            make_color(color);

            counter++
            if(counter < 120) {
                get_one_color(counter)
            } else {
                document.getElementById("button_start").removeAttribute("disabled");
                document.getElementById("button_start").textContent = "NEW";
            }
        });
}

*/
