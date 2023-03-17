/*

Resursen https://teaching.maumt.se/apis/loose_gun_array/
är en array av CSS-färger. Men ibland vill den inte och kommer fram
till att det är något fel med begäran och skickar relevant
response status.

Se videon.

*/

async function f1 () {
    const response = await fetch("https://teaching.maumt.se/apis/loose_gun_array/");
    if(response.ok) {
        const resource = await response.json();
        resource
        .forEach(color => {
            let div = document.createElement("div");
                    document.querySelector("body").append(div);
                    div.style.backgroundColor = color;
        })
    } else {
        document.querySelector("body").textContent = "Aj då... Testa igen!";
    }
}

f1();