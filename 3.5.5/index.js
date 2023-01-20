"use strict";

const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/number.php");
//I denna övning ska du, med hjälp endast av resursen ovan, få ihop en array av exakt 2 random siffror
//För att lyckas med detta måste du "fetcha" webbresursen två gånger
//och pusha resursen i samma array båda gångerna.
/*
for(let i = 0; i < 2; i++) {
    fetch_number();
} 

function fetch_number () {
    fetch(rqst)
        .then(r => r.text())
        .then(fetch_two_times);
}

    let ARRAY = [];

function fetch_two_times (resource) {
    ARRAY.push(resource);
    return ARRAY;
}

console.log(ARRAY);
*/

fetch(rqst)
        .then(r => r.text())
        .then(resource => {
            const ARRAY = [];
            ARRAY.push(resource);
                fetch(rqst)
                        .then(r => r.text())
                        .then(resource => {
                            ARRAY.push(resource);
                            console.log(ARRAY);
                        })
    });