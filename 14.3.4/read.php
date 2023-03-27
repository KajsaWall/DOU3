<?php
ini_set("display_errors", 1);
require_once "functions.php";

//börjar med att hämta listan av användare
$usersJSON = file_get_contents("users.json");
$users = json_decode($usersJSON, true);

//Med get parameter id ska då returnera användare med det ID
//Om inget id anges skickas en lista med alla användare
if(isset($_GET["id"])) {
    $id = $_GET["id"];

    foreach($users as $user) {
        if($user["id"] == $id) {
            header("Content-Type: application/json");
            echo json_encode($user);
            exit();
        } else {
            $error = ["error" => "not found"];
            sendJSON($error, 404);
        }
    }
} else {
    header("Content-Type: application/json");
    echo json_encode($usersJSON);
    exit();
}
?>