
// Du måste lösa alla uppgifter med array-metoder.
// Det är viktigt att du jämför din lösning med lärarens lösning, och att du förstår lärarens lösning

// Utgå från arrayen cities som finns i data.js.
// Du ska koda en sida som ser ut som den på bilden.

//1
document.querySelector("#p1").textContent = "Cities in France and their population, from less to most populated:"
let e1_1 = cities
    .filter(c => c.country === "France")
    .sort((a, b) => a.population - b.population)
    .forEach(c => {document.querySelector("#p1").innerHTML += `<p>${c.name} (${c.population} invånare)</p>`});

//2
let p2 = cities
    .reduce((accumulator, value) => accumulator + value.population, 0);
document.querySelector("#p2").textContent = "Total population: " + p2;

// 3
// Kom ihåg splice(). Det är en annan array-metod :-)
// Och var försiktiga så ni inte kapar cities för resten av övningen.
// Kopiera cities innan du kör splice på den.
let p3 = cities
    .filter(c => true)
    .sort((a, b) => a.area - b.area)
    .map( c => c.name)
    .splice(0, 3)
    .join(", ");
document.querySelector("#p3").textContent = "Tre minsta städer sett till arean: " + p3;

// 4
// Math.round(x) returnerar x avrundat till närmsta heltal
// Math.round(1.2) // 1
// Math.round(1.9) // 2

let p4 = cities
    .map(c => c)
    .map(c => {const density = Math.round(c.population / c.area); c.density = density; return c;})
    .sort((a, b) => a.density - b.density)
    .map(c => `${c.name} (${c.density} invånare per km2)`)
    .join("<br>");
document.querySelector("#p4").innerHTML = `Alla städer sorterade i stigande ordning enligt invånartäthet (population / area): <br> ${p4}`;

// 5
let p5 = cities
    .map(c => c)
    .sort((a, b) => b.population - a.population)
    .map( c => `${c.country} (${c.population})`)
    .splice(0,3)
    .join("<br>");
document.querySelector("#p5").innerHTML = `Countries and their population, from highest to lowest: <br> ${p5}`;
