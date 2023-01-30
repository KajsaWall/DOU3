/*

Denna resurs ger oss en (random) av 147 färger som har ett CSS-namn:
https://teaching.maumt.se/apis/random_color/?all&bullet
Tack vare &bullet så svarar den lite snabbare också :-).

Som du ser på videon ska du se till att sidan fylls med 100 (10x10) färglådor
i olika färger. Flera lådor kan ha samma färg.

Lös denna övning:
1) Med en global variabel som håller reda på hur många färger du har tagit emot
2) Utan den globala variablen

*/


function get_color (counter) {
const color_request = new Request ("https://teaching.maumt.se/apis/random_color/?all&bullet");

fetch(color_request)
    .then(r => r.json())
    .then(resource => {
        create_color_divs(resource);
        counter++
        if(counter < 100) {
            get_color(counter);
        }
    });

}

function create_color_divs (color_name) {
    let new_div = document.createElement("div");
    new_div.style.backgroundColor = color_name;
    document.querySelector("#wrapper").append(new_div);
}

get_color(0);