<?php
    ini_set("display_errors", 1);
    $method = $_SERVER["REQUEST_METHOD"];
    
    if($method == "GET") {
        $data = $_GET;
    } elseif($method == "POST") {
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
        <h1>Received the data via <code><?php echo $method ?></code></h1>
        <section>
            <div class="keys">KEYS</div>
            <div class="value">VALUE</div>
            <?php
                foreach($data as $key => $element) {

                    $key = ucfirst($key);
                    if(str_contains($key, "-")) {
                        $key = str_replace("-", "k", $key);
                        $key = str_ireplace("-", " ", $key);
                    }


                    if($element == "") {
                        echo "<div class=keys>$key</div>";
                        echo "<div class=value>Error: `$key` is empty</div>";
                    } elseif ($key == "Age") {
                        echo "<div class=keys>$key</div>";
                        echo "<div class=value>Error: `$key` can't be zero</div>";
                    } elseif (strlen($element) <= 1) {
                        echo "<div class=keys>$key</div>";
                        echo "<div class=value>Error: `$key` is too short (1 character or less)</div>";
                    } elseif ($key == "Email") {
                        if(!str_contains($element, "@" OR ".")) {
                            echo "<div class=keys>$key</div>";
                            echo "<div class=value>Error: `$key` does not contain @ or .</div>";
                        }
                    } elseif ($key == "Phone") {
                        if(strlen($element) < 10) {
                            echo "<div class=keys>$key</div>";
                            echo "<div class=value>Error: `$key` has to contain 10 digits</div>";
                        }
                    } elseif ($key == "Address") {
                        if(strlen($element) < 5) {
                            echo "<div class=keys>$key</div>";
                            echo "<div class=value>Error: `$key` is too short (5 characters or less)</div>";
                        }
                    } elseif ($key == "Zipcode") {
                        if(strlen($element) < 5) {
                            echo "<div class=keys>$key</div>";
                            echo "<div class=value>Error: `$key` has to contain 5 digits</div>";                            
                        }
                    } else {
                    echo "<div class=keys>$key</div>";
                    echo "<div class=value>$element</div>";
                    }
                }
                
            ?>

        </section>
    </main>

</body>
</html>