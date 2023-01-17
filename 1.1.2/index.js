"use strict";

const a1 = [1, 2, 3, 4];
const o1 = {
  name: "Jimi",
  surname: "Hendrix",
  nationality: "USA",
}

// 1a) Transformera a1 till en JSON-sträng och logga den på consolen.
let a1_string = JSON.stringify(a1);
console.log(a1_string);


// 1b) Samma sak men all kod ska rymmas i en rad (one-liner).
console.log(JSON.stringify(a1));


// 2a) Transformera o1 till en JSON-sträng och logga den på consolen.
console.log(JSON.stringify(o1));


// 3) Försök att själv skriva JSON-strängen av o2 nedan.
//    Kontrollera själv om det gick bra genom att parsa den och kolla på resultatet.
const o2 = {
  namn: "Arya",
  ras: "Siberian Husky",
};

console.log(JSON.stringify(o2));

const o2_string = `{"name":"Arya","ras":"Siberian Husky"}`;
console.log(o2_string);
console.log(JSON.parse(o2_string));
//console.log(JSON.parse('{"name":"Arya","ras":"Siberian Husky"}'));

//const parsme = JSON.parse('{"name":"Arya","ras":"Siberian Husky",}');
//console.log(parsme);


// 4) Transformera (parsa) denna sträng till en datastruktur och logga 
//    både datastrukturen och strängen på consolen.
const json_string = '{"stad":"Malmö","universitet":"MAU","betyg":5}';
console.log(json_string);
console.log(JSON.parse(json_string));
