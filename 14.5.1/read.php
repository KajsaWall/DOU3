<?php
$method = $_SERVER["REQUEST_METHOD"];
$filename = "users.json";

    if($method != "GET") {
        $ERROR = [
            "error" => "Only GET method is allowed!"
        ];
        header("Content-Type: application/json");
        http_response_code(405);
        $JSON = json_encode($ERROR);
        echo $JSON;
        exit();
    
    } else if($method == "GET") {
        $json = file_get_contents($filename);
        $users = json_decode($json, true);
    
        header("Content-Type: application/json");
        http_response_code(200);
        $JSON = json_encode($users);
        echo $json;
        exit();
    }



?>