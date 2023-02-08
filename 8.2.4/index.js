/*

Resursen https://teaching.maumt.se/apis/loose_gun/
är en CSS-färg. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

*/
const request = new Request ("https://teaching.maumt.se/apis/loose_gun/");

async function f1 () {
    try {
        const response = await fetch (request);
        if(response.ok) {
            const resource = await response.json();
            document.querySelector("body").style.backgroundColor = resource;
        } else {
            document.querySelector("body").textContent = response.status + " " + response.statusText;
            document.querySelector("body").style.backgroundColor = "grey";
        } } catch (error) {
        console.log(error);
    };
}

f1();