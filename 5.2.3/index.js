/*

Minns du resursen nedan?
https://randomuser.me/api/?results=20

Skapa ett program som först hämtar en random siffra (X) från 
https://teaching.maumt.se/apis/random_number/

och sedan hämtar exakt X users från randomuser.me

*/
fetch("https://teaching.maumt.se/apis/random_number/")
    .then(r => r.json())
    .then(resource => {
        fetch(`https://randomuser.me/api/?results=${resource}`)
            .then(r => r.json())
            .then(res => console.log(res.results));
    });


