<?php


$filename = "user.json";

//Vår A-array
$users = [
    ["name" => "Sebbe"],
    ["name" => "Erik"],
    ["name" => "Johannes"]
];

if(!file_exists($filename)) {
//Om inte filen finns
    $json = json_encode($users);
//Så gör vi om vår array till json

    if(file_put_contents($filename, $json) == false) {
        echo "<p>Unable to save the file</p>";
//Om filen inte går att spara
    } else {
    echo "<p>Saved the file $filename!</p>";
//OM den går att spara så Skriver ut att den har sparats
    }

} else {
//Om den finns
    $json = file_get_contents($filename);

    if ($json == null) {
        echo "<p>Unable to read the file</p>";
//Kontrollerar att vi har lyckats hämta filen, om null så ej
    } else {
//Så kommer vi hämta innehållet
    $data = json_decode($json, true);
//Göra om innehållet (vår A-array) till en datastruktur i php
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
//och så skriver vi ut innehållet
    }
}

?>

<?php
    ini_set("display_errors", 1);
    header("Content-Type: application/json");

    $filename = "users.json";

    if(file_exists("users.json")) {
        $json = file_get_content("users.json");
        $users = json_decode($json, true);
        http_response_code(200);
        echo json_encode($users);
        //gör om till json igen?
        exit();
    //Om den finns, hämta den, gör om den till riktig php
    } 

    http_response_code(500);
    $data = ["message" => "The file $filename does not exist!"];
    echo json_encode($data);
    exit();

    //VIKTIGT: response code måste ALLTID komma före echo
?>