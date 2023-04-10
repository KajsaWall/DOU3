<?php
$method = $_SERVER["REQUEST_METHOD"];
$filename = "users.json";

if ($method != "GET") {
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

    if(isset($_GET["id"])) {
        $id = $_GET["id"];

        foreach($users as $user) {
            if($user["id"] == $id) {
                header("Content-Type: application/json");
                http_response_code(200);
                $json = json_encode($user);
                echo $json;
                exit();
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
    }
}
?>