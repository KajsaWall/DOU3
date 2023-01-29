/*

Minns du resursen nedan?
https://randomuser.me/api/?results=20

Skapa ett program som först hämtar en random siffra (X) från 
https://teaching.maumt.se/apis/random_number/

och sedan hämtar exakt X users från randomuser.me

*/
const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");
fetch(random_number_request)
    .then(r => r.json())
    .then(resource => {
        const random_color_request = new Request (`https://randomuser.me/api/?results=${resource}`);
        fetch(random_color_request)
            .then(r => r.json())
            .then(res => console.log(res.results));
    });


