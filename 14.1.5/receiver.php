<?php
ini_set("display_errors", 1);

$method = $_SERVER["REQUEST_METHOD"];

if($method == "GET") {

    if(isset($_GET["name"], $_GET["breed"], $_GET["age"])) {

        if($_GET["name"] != "" and $_GET["breed"] != "" and $_GET["age"] != "") {
            $name = $_GET["name"];
            $breed = $_GET["breed"];
            $age = $_GET["age"];
            $data = [
                "name" => $name,
                "breed" => $breed,
                "age" => $age
            ];
        }

    }

} else if ($method == "POST") {

    if(isset($_POST["first_name"], $_POST["last_name"], $_POST["email"], $_POST["phone"], $_POST["address"], $_POST["zipcode"], $_POST["city"])) {
        $firstname = $_POST["first_name"];
        $lastname = $_POST["last_name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $address = $_POST["address"];
        $zipcode = $_POST["zipcode"];
        $city = $_POST["city"];
        $data = [
            "first name" => $firstname,
            "last name" => $lastname,
            "email" => $email,
            "phone" => $phone,
            "address" => $address,
            "zipcode" => $zipcode,
            "city" => $city
        ];
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <main>
        <h1>Received the data via <?php echo $method ?> </h1>
        <p>KEYS<span>VALUES</span></p>
    <?php
    foreach($data as $key => $value) {
        echo "<p>$key<span>$value</span></p>";
    }
    ?>

    </main>
</body>
</html>