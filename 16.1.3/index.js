const button = document.getElementById("button");
button.addEventListener("click", startCountDown);

function startCountDown (event) {
    document.getElementById("number").innerHTML = `4`;
    setTimeout(() => {document.getElementById("number").innerHTML = `3`;}, 1000);
    setTimeout(() => {document.getElementById("number").innerHTML = `2`;}, 2000);
    setTimeout(() => {document.getElementById("number").innerHTML = `1`;}, 3000);
    setTimeout(() => {
        document.getElementById("number").innerHTML = `0`;
        document.querySelector("div").classList.add("result");
        document.querySelector("div").innerHTML = "Done!"; }
        , 4000); 
}