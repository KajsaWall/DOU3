<?php

function sendJSON($data, $statusCode = 200) {
header("Content-Type: application/json");
http_response_code($statusCode);
$json = json_encode($data);
echo $json;
exit(); }

function getANDdecode($JSONfile) {
    $arrayJSON = file_get_contents($JSONfile);
    return json_decode($arrayJSON, true);
}

?>