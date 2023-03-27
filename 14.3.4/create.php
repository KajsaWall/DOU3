<?php
ini_set("display_errors", 1);
require_once "functions.php";

if(isset($_POST["first_name"], $_POST["last_name"], $_POST["email"], $_POST["ip_address"])) {
    
    if(!$_POST["first_name"] == "" and !$_POST["last_name"] == "" and !$_POST["email"] == "" and !$_POST["ip_address"] == "") {
        $firstname = $_POST["first_name"];
        $lastname = $_POST["last_name"];
        $email = $_POST["email"];
        $ip = $_POST["ip_address"];

        $highestID = 0;

        $usersJSON = file_get_contents("users.json");
        $users = json_decode($usersJSON, true);
        foreach($users as $user) {
            if($user["id"] > $highestID) {
                $highestID = $user["id"];
            }
        }
        $id = $highestID;

        $newUser = [
            "id" => $id,
            "first_name" => $firstname,
            "last_name" => $lastname,
            "email" => $email,
            "ip_address" => $ip
        ];

        $users[] = $newUser;

        file_put_contents("users.json", json_encode($users));
        header("Content-Type: application/json");
        echo json_encode($newUser);
        exit();

    } else {
        $error = ["error:" => "bad request"];
        sendJSON($error, 400);
    }
    
} 
?>