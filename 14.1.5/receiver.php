<?php
ini_set("display_errors", 1);
$method = $_SERVER["REQUEST_METHOD"];
 if($method == "GET") {
    $data = $_GET;
 } elseif ($method == "POST") {
    $data = $_POST;
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="receiver.css">
</head>
<body>
    <main>
        <h1>Received the data via <code><?php echo $method; ?></code></h1>
        <section>
            <div class="keys">KEYS</div>
            <div class="value">VALUES</div>
         <?php
            foreach($data as $key => $element) {
                echo "<div class=keys>$key</div>";
                echo "<div class=value>$element</div>";
            }
        ?>
        </section>
</main>
</body>
</html>