<?php
$method = $_SERVER["REQUEST_METHOD"];
$filename = "users.json";

if ($method != "POST") {
    $ERROR = [
        "error" => "Only POST method is allowed!"
    ];
    header("Content-Type: application/json");
    http_response_code(405);
    $JSON = json_encode($ERROR);
    echo $JSON;
    exit();

} else if ($method == "POST") {

    if(!file_exists($filename)) {
        file_put_contents($filename, "{}");
    }

    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    if(!isset($data["name"], $data["age"], $data["breed"])) {
        $error = [
            "error" => "One or more keys are missing."
        ];
        header("Content-Type: application/json");
        http_response_code(400);
        $json = json_encode($error);
        echo $json;
        exit();
    }

    if(!$data["name"] or !$data["age"] or !$data["breed"]) {
        $error = [
            "error" => "One or more keys contains empty data."
        ];
        header("Content-Type: application/json");
        http_response_code(400);
        $json = json_encode($error);
        echo $json;
        exit();
    }

    $name = $data["name"];
    $age = $data["age"];
    $breed = $data["breed"];

    $highestID = 0;

    $JSON = file_get_contents($filename);
    $users = json_decode($JSON, true);
    foreach($users as $user) {
        if($user["id"] > $highestID) {
            $highestID = $user["id"];
        }
    }
    $id = $highestID + 1;

    $newUser = [
        "id" => $id,
        "name" => $name,
        "age" => $age,
        "breed" => $breed
    ];

    $users[] = $newUser;

    file_put_contents("users.json", json_encode($users, JSON_PRETTY_PRINT));
    header("Content-Type: application/json");
    http_response_code(200);
    echo json_encode($newUser);
    exit();

} 

?>