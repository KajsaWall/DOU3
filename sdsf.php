<?php
    if(isset($_SERVER["REQUEST_METHOD"])) {
        $method = $_SERVER["REQUEST_METHOD"];
        echo "<h2>You are using the HTTP methos $method</h2>";
    }

    $source = $_FILES["test"]["tmp_name"];
    $destination = $_FILES["test"]["name"];

    $filename = $_FILES["test"]["name"];
    $timestamp = time();
    $name = sha1("$timestamp-$filename");

    $destination = "uploads/$name";


    $extension = pathinfo($filename, PATHINFO_EXTENSION); 
    $destination = "uploads/doggo.$extension";

    move_uploaded_file($source, $destination);

    $size = $_FILES["test"]["size"];
    $type = $_FILES["test"]["type"];

    if ($size > 10000) {
        echo "<h1>We only allow 50kb uploads</h1>";
    } else {
        if ($type != "image/png"){
            echo "<h1>We only allow PNG uploads</h1>";
        } else {
            if (move_uploaded_file($source, $destination)) {
                echo "<h1>Success!</h1>";
            } else {
                echo "<h1>Fail.</h1>";
            }
        }
    }

?>

<form action="index.php" method="POST">
    <button type="submit">Skicka</button>
</form>

<form action="index.php" method="GET">
    <input type="text" name="id">
    <input type="text" name="name">
    <button type="submit">Skicka</button>
</form>

<form action="receiver.php" method="POST" id="upload">
    <input type="file" name="test">
    <button type="submit">Upload</button>
</form>

<script>
    //Lyssnar på när formuläret skickas
    const form = document.getElementById("upload");
    form.addEventListener("submit", function(event) {
        //Vi vill inte att den här ska skickas oss till en ny sida så måste vi avbryta formuläret och låta oss ta över-handen
        event.preventDefault();
        
        const formData = new FormData(form);
        
        const request = new Request("receiver.php", {
            method: "POST",
            body: formData
        });

        fetch(request)
            .then(response => response.json())
            .then(json => {
                console.log(data);
            });
    })
</script>