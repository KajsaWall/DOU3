"use strict";

function print_text (description, city) {
    let new_div = document.createElement("div");
    new_div.textContent = `${description} ${city}`;
    document.querySelector("#wrapper").append(new_div);
}


const cities_in_france = cities
    .filter(city_object => city_object.country === "France")
    .map(city_object => city_object.name)
    .join(", ");
print_text("Cities in France:", cities_in_france);

const city_least_population = cities
    .sort((a, b) => a.population - b.population)[0].name;
print_text("Staden med minst invånare:", city_least_population);

const city_largest_area = cities    
    .sort((a, b) => b.area - a.area)[0].name;
print_text("Staden med störst area:", city_largest_area);

const cities_alfa_order = cities
    .sort((a, b) => {
        if(a.name < b.name) {
            return -1;
        } else {
            return 1;
        }
    })
    .map(city_object => city_object.name)
    .join(", ");
print_text("Städer med störst area:", cities_alfa_order);

const cities_more_then_population = cities
    .filter(city_object => city_object.population > 150000)
    .sort((a, b) => a.population - b.population)
    .map(city_object => city_object.name)
    .join(", ");
print_text("Städerna som har fler än 150000 invånare, sorterade enligt invånarantal i stigande ordning:", cities_more_then_population);


/*
.sort(comparison)
    .map(city_object => city_object.name)
.filter(city_object => {
    if(city_least_population.length > 0) {
        city_least_population.splice(city_least_population.length, 1);
    }
});
*/