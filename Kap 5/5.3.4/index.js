

const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");
let counter = 0;
        document.querySelector("#number1").textContent = "...";
        document.querySelector("#number2").textContent = "...";
        document.querySelector("#sum").textContent = "waiting";


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

    function sum_function(){
        document.querySelector("#sum").textContent=parseInt(document.querySelector("#number1").textContent) + parseInt(document.querySelector("#number2").textContent);
    }