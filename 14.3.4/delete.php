<?php
ini_set("display_errors", 1);
require_once "functions.php";

if(isset($_GET["id"])) {
    $id = $_GET["id"];

    $usersJSON = file_get_contents("users.json");
    $users = json_decode($usersJSON, true);

    foreach($users as $index => $user) {
        if($user["id"] == $id) {
            array_splice($users, $index, 1);
        }
    }

    $usersJSON = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents("users.json", $usersJSON);
    header("Content-Type: application/json");
    echo $usersJSON;
    echo "hej";
    exit(); 

} else {
    $error = ["error" => "not found"];
    sendJSON($error, 404);
}

?>