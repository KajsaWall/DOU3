/*

Resource URL: https://maumt.se/dbp/dbp22/chunks_material/resources/random_status.php

Possible response status codes from server:
200, 400, 404, 405, 418, 500

Find info about meaning of different codes:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

*/

const rqst = new Request ("https://maumt.se/dbp/dbp22/chunks_material/resources/random_status.php");

fetch(rqst)
    .then(f1);

function f1 (resource) {
    let div_dom = document.querySelector("body > div");
    let explanation;
    console.log(resource);

    switch (resource.status) {
        case 200:
        explanation = "The request succeeded.";
            break;
        case 400:
        explanation = "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).";
            break;
        case 404:
        explanation = "The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.";
            break;
        case 405:
        explanation = "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.";
            break;
        case 418:
        explanation = "The server refuses the attempt to brew coffee with a teapot.";
            break;
        case 500:
        explanation = "The server has encountered a situation it does not know how to handle.";
            break;
        default:
        explanation = "Unknown status code";
    }

    div_dom.innerHTML = `
    <h3>Response Status</h3>
    <p>Code: ${resource.status} </p>
    <p>Text: ${resource.statusText} </p>
    <p>Explanation: ${explanation} </p>
    `;
}