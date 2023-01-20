"use strict";

//Version 1 
/*
const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/numbers.php");

let response_promise = fetch(rqst);
let resource_promise = response_promise.then(f1);
resource_promise.then(f2);

function f1 (response) {
    return response.json();
}

function f2 (resource) {
    for (let number of resource) {
        console.log(number);
    }
}
*/

//Version 2

const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/numbers.php");

fetch(rqst)
    .then(r => r.json())
    .then(resource => {for (let number of resource) {console.log(number)}});