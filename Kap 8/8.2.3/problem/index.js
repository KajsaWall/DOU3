/*

Resursen https://teaching.maumt.se/apis/loose_gun/
är en CSS-färg. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

*/

const request = new Request ("https://teaching.maumt.se/apis/loose_gun/");

fetch(request)
    .then(response => {
        if(response.ok) {
            return response.json();
        }else {
            document.querySelector("body").textContent = `OOPS error ${response.status}: ${response.statusText}`;
        }})
    .then(resource => {
        if(resource === undefined) {
            document.querySelector("body").style.backgroundColor = "grey";
        }else {
            document.querySelector("body").style.backgroundColor = resource;
        }
    })
    .catch(error => console.log(error));