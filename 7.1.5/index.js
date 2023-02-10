/*

Samma problem som unit 6.2.4 (alltså övning 3 i sektionen 6.2).

Dessa resurser finns (jag har lagt till en längre väntetid så ni bättre hinner se vad som händer):
https://teaching.maumt.se/apis/attractions/?t_min=2&attraction=X
https://teaching.maumt.se/apis/attractions/?t_min=2&city=Y
https://teaching.maumt.se/apis/attractions/?t_min=2&country=Z

Där X måste vara en av följande: Lavapies, Templo_de_Debod, Fontana_di_trevi, Pantheon, Brandenburger_Tor eller Kreuzberg.
Notera underscore i namnen på sevärdheterna!

Y måste vara någon av följande: Madrid, Rome eller Berlin.

Z måste vara någon av följande: Spain, Italy, Germany

Koda en sida som fungerar som den på videon. Du ska koda två lösningar:

(1) I den första lösning får inte .then förekomma.
(2) I den andra får inte async eller await förekomma (ja, som ni löste den i sektionen 6.2. Kan du fixa det igen utan att kolla på lösningen?)

*/

document.querySelector("input").addEventListener("keyup", keyup);
function keyup (event) {
        let input_ = event.target.value;
        fetch_attraction (input_);
}

async function fetch_attraction (attraction_name) {

    document.querySelector(".attraction_name").textContent = "";
    document.querySelector(".attraction_info").textContent = "";
    document.querySelector(".city").textContent = "";
    document.querySelector(".city_info").textContent = "";
    document.querySelector(".country").textContent = "";
    document.querySelector(".country_info").textContent = "";

    console.log(attraction_name);
    let new_input = "";
    if(attraction_name.includes(" ")){
        for(let bokstav of attraction_name) {
            if(bokstav === " ") {
                bokstav = "_";
            }
            new_input = new_input + bokstav;
        }
        console.log(new_input);
    };


    // GET ATTRACTION INFO
    document.querySelector(".attraction_name").textContent = "Fetching attraction...";
    const att_request = new Request ("https://teaching.maumt.se/apis/attractions/?t_min=2&attraction=" + new_input);
    const att_response = await fetch(att_request);
    const attraction = await att_response.json();
    document.querySelector(".attraction_name").textContent = attraction_name;
    document.querySelector(".attraction_info").textContent = attraction.info;
    document.querySelector(".city").textContent = attraction.city;
    document.querySelector(".city_info").textContent = "Fetching attraction...";
    // GET CITY INFO
    const city_request = new Request ("https://teaching.maumt.se/apis/attractions/?t_min=2&city=" + attraction.city);
    const city_response = await fetch(city_request);
    const city = await city_response.json();
    document.querySelector(".city_info").textContent = city.info;
    document.querySelector(".country").textContent = city.country;
    document.querySelector(".country_info").textContent = "Fetching attraction...";
    // GET COUNTRY INFO
    const cou_request = new Request ("https://teaching.maumt.se/apis/attractions/?t_min=2&country=" + city.country);
    const cou_response = await fetch(cou_request);
    const country = await cou_response.json();
    document.querySelector(".country_info").textContent = country.info;
}

//lösning 2

document.querySelector("input").addEventListener("keyup", keyup);
function keyup (event) {
        let input_ = event.target.value;
        fetch_attraction (input_);
}

function fetch_attraction (attraction_name) {
    document.querySelector(".attraction_name").textContent = "Fetching resources...";

    let input_ = "";
    if(attraction_name.includes(" ")) {
        for(let bokstav of attraction_name) {
            if(bokstav === " ") {
                bokstav = "_";
            }
            input_ = input_ + bokstav;
        }
    }
    console.log(input_);

    const att_request = new Request("https://teaching.maumt.se/apis/attractions/?t_min=2&attraction=" + input_);
    fetch(att_request)
        .then(r => r.json())
        .then(attraction => {
            document.querySelector(".attraction_name").textContent = attraction_name;
            document.querySelector(".attraction_info").textContent = attraction.info;
            document.querySelector(".city").textContent = attraction.city;

            const city_request = new Request ("https://teaching.maumt.se/apis/attractions/?t_min=2&city=" + attraction.city);
            fetch(city_request)
                .then(r => r.json())
                .then(city => {
                    document.querySelector(".city_info").textContent = city.info;
                    document.querySelector(".country").textContent = city.country;
                    document.querySelector(".country_info").textContent = "Fetching resources...";

                    const country_request = new Request ("https://teaching.maumt.se/apis/attractions/?t_min=2&country=" + city.country);
                    fetch(country_request)
                        .then(r => r.json())
                        .then(country => {
                            document.querySelector(".country_info").textContent = country.info;
                        })
                    })
        })
}