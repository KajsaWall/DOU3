<?php
ini_set("display_errors", 1);
require_once "functions.php";

//Returnera ID
if(isset($_GET["id"])) {
    $id = $_GET["id"];

    $users = getANDdecode("users.json");
    //$usersJSON = file_get_contents("users.json");
    //$users = json_decode($usersJSON, true);

    foreach($users as $user) {
        if($user["id"] == $id) {
            sendJSON($user);
        }
    }
}

//Returnera belowAge
if(isset($_GET["belowAge"])) {
    $ageLimit = $_GET["belowAge"];

    $users = getANDdecode("users.json");
    $NewUsers = [];
    foreach($users as $user) {
        if($user["age"] < $ageLimit) {
            $NewUsers[] = $user;
        }
    }
    sendJSON($NewUsers);
}

//Returnera knows
if(isset($_GET["knows"])) {
    $knowsID = $_GET["knows"];

    $users = getANDdecode("users.json");
    $NewUsers = [];
    foreach($users as $user) {
        if(in_array($knowsID, $user["knows"])) {
            $NewUsers[] = $user;
        }
    }
    sendJSON($NewUsers);
}

//Returnera email
if(isset($_GET["email"]) and $_GET["email"] == "export") {
    $email = $_GET["email"];

    $users = getANDdecode("users.json");
    $NewUsers = [];
    foreach($users as $user) {
        $NewUsers[] = $user;

    }
    sendJSON($NewUsers);
}

//Returnera search
if(isset($_GET["search"])) {
    $search = strtolower($_GET["search"]);

    $users = getANDdecode("users.json");
    $NewUsers = [];
    foreach($users as $user) {
        $userFirstName = strtolower($user["first_name"]);
        $userLastName = strtolower($user["last_name"]);
        if(str_contains($userFirstName, $search) or str_contains($userLastName, $search)) {
            $NewUsers[] = $user;
        }
    }
    sendJSON($NewUsers);
}
?>