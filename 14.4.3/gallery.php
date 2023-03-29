<?php
ini_set("display_errors", 1);

    $JSON = file_get_contents("images.json");
    $images = json_decode($JSON, true);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="gallery.css">
</head>
<body>
    <?php
    foreach($images as $image) {
        $image = $image["source"];
        echo "<div><img src=$image></div>";
    }
    ?>
</body>
</html>