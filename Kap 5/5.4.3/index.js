/*

I denna övning ska ni använda resursen
https://teaching.maumt.se/apis/random_color/

Tänk noggrannt hur ni ska koda CSS innan ni sätter igång.
Använd papper och penna för att tänka bättre.

*/

init();

function init () {

const n_elements = 5;
for(let i = 0; i < n_elements; i++) {
    const div_color = document.createElement("div");
    document.querySelector("#wrapper").append(div_color);

    div_color.addEventListener("click", () => fill_background_color(div_color));
}
    document.querySelector("#wrapper").querySelectorAll("div").forEach(fill_background_color);

}

function fill_background_color (color_div) {
    const request = "https://teaching.maumt.se/apis/random_color/";
    color_div.classList.add("fetching");

    fetch(request)
        .then(r => r.json())
        .then(resource => {
            color_div.style.backgroundColor = resource;
            color_div.classList.remove("fetching");
        })
}