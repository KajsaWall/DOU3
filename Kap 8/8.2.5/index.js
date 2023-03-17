/*

Resursen https://teaching.maumt.se/apis/loose_gun_array/
är en array av CSS-färger. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

Se videon.

*/
fetch("https://teaching.maumt.se/apis/loose_gun_array/")
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return -1;
        }
    })
    .then(resource => {
        if(resource !== -1) {
            resource
                .forEach(color => {
                    let div = document.createElement("div");
                    document.querySelector("body").append(div);
                    div.style.backgroundColor = color;
                });
        } else {
            document.querySelector("body").textContent = "Aj då... Testa igen!"
        }
    });