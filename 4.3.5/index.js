/*
Använd API:n som vi har använt i videorna och koda en webbsida som:
*/
document.querySelector("button").addEventListener("click", f1);
const rqst = new Request ("https://teaching.maumt.se/apis/users/");


//Har en knapp som, när den klickas, visar i en div namnet på alla användare i databasen 
/*
function f1 (event) {
    fetch(rqst) 
        .then(r => r.json())
        .then(f2);
}

function f2 (resource) {
    let i = 0;
    for(const element of resource) {
        if(element === null) {
            resource.splice(i, 1);
            console.log(resource);
        }        
        i++;
    }

    for(const person of resource) {
        document.querySelector("div").textContent += `${person.firstName} ${person.lastName}, `
    }
} */

//Har en knapp som, när den klickas, skickar en POST-förfrågan för att skapa en ny användare (alltid samma)
/*
body_post = {
    firstName: "Kajsa",
    lastName: "Wallander",
    born: 2002
};


const request_post = new Request ("https://teaching.maumt.se/apis/users/", 
{
    method: `POST`,
    body: JSON.stringify(body_post),
    headers: {"Content-type": "application/json; charset=UTF-8"}
}
)

function f1 (event) {
    fetch(request_post)
        .then(r => r.json())
        .then(f2);
}

function f2 (resource) {
    console.log(resource);
}
*/

//Har ett input fält och en knapp som, när den klickas, skickar en PATCH-förfrågan för att ändra användaren med id:et som skrevs i input fältet

let input_dom = document.createElement("input");
document.querySelector("#wrapper").append(input_dom);


    let body_patch = {
        id: 68,
        lastName: "Wallander",
    }

    const request_patch = new Request ("https://teaching.maumt.se/apis/users/", 
    {
      method: `PATCH`,
      body: JSON.stringify(body_patch),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    let input_value = parseInt(input_dom.value);
    console.log(input_value);

/*function f1 (event) {
    input_value = parseInt(input_dom.value);
    console.log(input_value);

    fetch(request_patch)
        .then(r => r.json())
        .then(resource => {
            console.log(resource);
            resource.id = input_value;
        });
}
*/

//Har ett input fält och en knapp som, när den klickas, skickar en DELETE-förfrågan för att ta bort användaren med id:et som skrevs i input fältet

const body_delete = {
    id: input_value,
};

const request_delete = new Request ("https://teaching.maumt.se/apis/users/", 
    {
      method: `DELETE`,
      body: JSON.stringify(body_delete),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });

function f1 (event) {
    input_value = parseInt(input_dom.value);
    console.log(input_value);

    fetch(request_delete)
        .then(r => r.json())
        .then()
}
