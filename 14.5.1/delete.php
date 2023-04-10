<?php
$method = $_SERVER["REQUEST_METHOD"];
$filename = "users.json";

if ($method != "DELETE") {
    $ERROR = [
        "error" => "Only DELETE method is allowed!"
    ];
    header("Content-Type: application/json");
    http_response_code(405);
    $JSON = json_encode($ERROR);
    echo $JSON;
    exit();

} else if($method == "DELETE") {
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    $id = $data["id"];

    $JSON = file_get_contents($filename);
    $users = json_decode($JSON, true);

    $OK = [];

    foreach($users as $user) {
        if($user["id"] == $id) {
            $OK[] = $user;
            break;
        } else {
            $error = [
                "error" => "User not found"
            ];
            header("Content-Type: application/json");
            http_response_code(404);
            $json = json_encode($error);
            echo $json;
            exit();
        }
    }

    if($OK) {
        foreach($users as $index => $user) {
            if($user["id"] == $id) {
                array_splice($users, $index, 1);
            }
        }
        $usersJson = json_encode($users, JSON_PRETTY_PRINT);
        file_put_contents($filename, $usersJson);

        header("Content-Type: application/json");
        http_response_code(200);
        $json = json_encode($id);
        echo $json;
        exit();
    }

}
?>