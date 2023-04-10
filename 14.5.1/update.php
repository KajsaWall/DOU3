<?php
$method = $_SERVER["REQUEST_METHOD"];
$filename = "users.json";

if ($method != "PUT") {
    $ERROR = [
        "error" => "Only PUT method is allowed!"
    ];
    header("Content-Type: application/json");
    http_response_code(405);
    $JSON = json_encode($ERROR);
    echo $JSON;
    exit();

} else if($method == "PUT") {
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    $id = $data["id"];

    
    $JSON = file_get_contents($filename);
    $users = json_decode($JSON, true);

    $updatedArray = [];

    $OK = [];

    foreach($users as $user) {
        if($user["id"] == $id) {
            $updatedUser = [
                "id" => $data["id"],
                "name" => $data["name"],
                "age" => $data["age"],
                "breed" => $data["breed"]
            ];
            $OK[] = $updatedUser;
        }
    }

    if(!$OK) {
        $error = [
            "error" => "User not found"
        ];
        header("Content-Type: application/json");
        http_response_code(404);
        $json = json_encode($error);
        echo $json;
        exit();

    } else {
        
    foreach($users as $user) {
            if($user["id"] == $id) {
                $updatedUser = [
                    "id" => $data["id"],
                    "name" => $data["name"],
                    "age" => $data["age"],
                    "breed" => $data["breed"]
                ];
                $updatedArray[] = $updatedUser;
            } else {
                $updatedArray[] = $user;
            }
        }
        $usersJson = json_encode($updatedArray, JSON_PRETTY_PRINT);
        file_put_contents($filename, $usersJson);

        $json = file_get_contents($filename);
        $users = json_decode($json, true);

        foreach($users as $user) {
            if($user["id"] == $id) {
                header("Content-Type: application/json");
                http_response_code(200);
                $json = json_encode($user);
                echo $json;
                exit();
            }
        }        
    }
}
?>