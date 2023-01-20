const rqst = new Request ("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php");
document.querySelector("body > button").addEventListener("click", get_number);
document.querySelector("body > div").textContent = "- -";

function get_number () {
    fetch(rqst)
    .then(r => r.text())
    .then(print_number);
}


function print_number (resource) {
    document.querySelector("body > div").textContent = resource;
    console.log(resource);
}