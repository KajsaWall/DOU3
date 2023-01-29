
/*

I lösningen till förra övningen använde jag en global variabel för att kontrollera
om båda siffrorna hade kommit in (variabeln numbers_received)

Lös samma problem men utan att använda en variabel som finns "utanför" funktionerna.
Det går inte att lösa detta genom att skicka argument mellan dem eller genom att skapa
nya funktioner som tar emot andra argument, etc. Ni kommer att upptäcka att ni alltid
till slut behöver en någonting (som en variabel) som ligger utanför funktionerna där ni
kan lagra ett värde som informerar om hur många siffror ni har fått in.

Så frågan är vad annars (som ligger utanför funktionerna) man skulle kunna använda för
att kontrollera att båda siffrorna har kommit in.
window.localStorage skulle kunna vara ett sånt ställe där ni kan lagra data. Men det känns 
som overkill. Det finns något annat på sidan som kan berätta om siffrorna har kommit in...
vad skulle det kunna vara?

Om du inte kommer på det så finns svaret längre ner på sidan.

*/

const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");

        document.querySelector("#number1").textContent = "...";
        document.querySelector("#number2").textContent = "...";
        document.querySelector("#sum").textContent = "waiting";
        document.querySelector("button").addEventListener("click", activate)


function activate (event) {

//number 1
fetch(random_number_request)
    .then(r => r.text())
    .then(resource => {
        document.querySelector("#number1").textContent = resource;
        sum_function(resource, 1);
    });

//number 2
fetch(random_number_request)
    .then(r => r.text())
    .then(resource => {
        document.querySelector("#number2").textContent = resource;
        sum_function(resource, 2);
    });
}


function sum_function(n, order){
    document.getElementById(`number${order}`).textContent = n;

    const div1 = document.getElementById(`number1`);
    const div2 = document.getElementById(`number2`);

    if(div1 !== "..." && div2 !== "..."){
        let n1 = parseInt(div1.textContent);
        let n2 = parseInt(div2.textContent);
        document.querySelector("#sum").textContent = n1 + n2;
    }
}

/*
const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");


let counter = 0;
        document.querySelector("#number1").textContent = "...";
        document.querySelector("#number2").textContent = "...";
        document.querySelector("#sum").textContent = "waiting";
document.querySelector("button").addEventListener("click", activate)


function activate (event) {
counter = 0;

//number 1
fetch(random_number_request)
    .then(r => r.text())
    .then(resource => {
        document.querySelector("#number1").textContent = resource;
        counter++;
        if(counter === 2){
            sum_function();
        };
//number 2
            fetch(random_number_request)
            .then(r => r.text())
            .then(resource => {
                document.querySelector("#number2").textContent = resource;
                counter++;
                if(counter === 2){
                    sum_function();
                };
            });
        });
}


function sum_function(){
    document.querySelector("#sum").textContent=parseInt(document.querySelector("#number1").textContent) + parseInt(document.querySelector("#number2").textContent);
}


*/








































/*

Vi kan använda innehållet i divvarna #number1 och #number2 för att veta om båda siffrorna har kommit in.
Om innehållet i båda divvarna är något annat än "..." (vi sätter den text-content när vi börjar fetcha)
så har båda divvarna fylls med en siffra och vi är redo för summan.

*/