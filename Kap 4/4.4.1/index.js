"use strict";

// Du behöver inte skapa en webbsida (ännu). Skapa bara lite kod som gör att du kan hämta, lägga till, 
//ändra befintliga och ta bort meddelanden. Försök att läsa det utan att kolla på tidigare videos eller övningar. 
//Går det inte så är det helt ok att kolla på det (eller lösningen). 


const prefix = "https://teaching.maumt.se/apis/BBAPI/v1/";

const credentials = {
  un: "oak_book",
  pw: "pass",
};

const post_request = new Request(prefix, {
  method: "POST",
  headers: {"Content-type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    ...credentials,
    receiver: "Sebbe",
    content: "Yo yo!"
  }),
});

fetch(post_request)
  .then(r => r.json())
  .then(console.log);



const patch_request = new Request(prefix, {
  method: "PATCH",
  headers: {"Content-type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    ...credentials,
    message_id: 1,
    content: "New yo!"
  }),
});

// fetch(patch_request)
//   .then(r => r.text())
//   .then(console.log);





const delete_request = new Request(prefix, {
  method: "DELETE",
  headers: {"Content-type": "application/json; charset=UTF-8"},
  body: JSON.stringify({
    ...credentials,
    message_id: 1,
  }),
});

// fetch(delete_request)
//   .then(r => r.text())
//   .then(console.log);