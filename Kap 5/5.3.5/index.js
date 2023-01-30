
const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");


let counter = 0;
        document.querySelector("#number1").textContent = "...";
        document.querySelector("#number2").textContent = "...";
        document.querySelector("#sum").textContent = "waiting";
        document.querySelector("button").addEventListener("click", activate)
/*

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
    });

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
}
*/

function sum_function(){
let n1 = document.querySelector("#number1").textContent;
n1 = parseInt(n1);
let n2 = document.querySelector("#number2").textContent;
n2 = parseInt(n2);
let sum = n1 + n2;
document.querySelector("#sum").textContent = sum;
}

//


function activate (event) {

const fetch_number1 = fetch(random_number_request)
                        .then(r => r.text())
                        .then(resource => {
                        document.querySelector("#number1").textContent = resource;})
const fetch_number2 = fetch(random_number_request)
                        .then(r => r.text())
                        .then(resource => {
                        document.querySelector("#number2").textContent = resource;})


let PromiseArray = [fetch_number1, fetch_number2];



Promise.all(PromiseArray)
    .then(result => {sum_function()})
    .catch(error => {console.log("NO AN ERROR!")});

}