"use strict";

const rqst = new Request ("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php");



fetch(rqst)
    .then(r => r.json())
    .then(resource => document.querySelector("body > div").textContent = resource);