<?php
ini_set("display_errors", 1);
$filename = "dogs.json";
$message = "";
$dogs = [];

if(file_exists($filename)) {
    $json = file_get_contents($filename);
    $dogs = json_decode($json, true);
}

if(isset($_POST["Name"], $_POST["Breed"], $_POST["Age"], $_POST["FavoriteFood"])) {
    
    $name = $_POST["Name"];
    $breed = $_POST["Breed"];
    $age = $_POST["Age"];
    $food = $_POST["FavoriteFood"];

    if($name != "" AND $breed != "" AND $age != "" AND $food != "") {
        $newDog = [
            "name" => $name,
            "breed" => $breed,
            "age" => intval($age),
            "food" => $food
        ];
        
        $dogs[] = $newDog;
        file_put_contents($filename, json_encode($dogs, JSON_PRETTY_PRINT));
        
        $message = "$name ($breed) was added to the kennel!";
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <main>
        <h1>Best Buddies</h1>
        <p class="info"><?php 
        if($message != "") {
            echo $message;
        }
        ?></p>
        <div id="dogs">
        <?php
        if(count($dogs) == 0) {
            echo "<p class=noDogs>There are no dogs yet.</p>";
        } else {
            echo"
            <div class=info>
                <div>Name</div>
                <div>Breed</div>
                <div>Age</div>
                <div>Favorite food</div>
            </div>";
        }
        foreach ($dogs as $dog) {
           $name = $dog["name"];
           $breed = $dog["breed"];
           $age = $dog["age"];
           $food = $dog["food"];
           echo "
           <div>
                <div>$name</div>
                <div>$breed</div>
                <div>$age</div>
                <div>$food</div>
           </div>";
        }
        ?>
        </div>
        <h2>Add a new dog</h2>
        <form action="index.php" method="POST">
            <input type="text" name="Name" placeholder="Name">
            <input type="text" name="Breed" placeholder="Breed">
            <input type="number" name="Age" placeholder="Number">
            <input type="text" name="FavoriteFood" placeholder="Favorite Food">
            <button type="submit">Save</button>
        </form>
    </main>
</body>
</html>