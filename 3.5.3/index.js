
const rqst = new Request("https://www.maumt.se/dbp/dbp22/chunks_material/resources/yes_no.php");

fetch(rqst)
    .then(r => r.text())
    .then(f1);

function f1 (resource) {
    if (resource === "yes") {
        document.querySelector("body").style.backgroundColor = "green";
    } else {
        document.querySelector("body").style.backgroundColor = "red";
    }
}
