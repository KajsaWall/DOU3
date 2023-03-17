<?php
ini_set("display_errors", 1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
                body {
                height: 100vh;
                margin: 0;
                display: grid;
                grid-template-rows: repeat(10, 1fr);
                grid-template-columns: repeat(10, 1fr);
                }
                div {
                    border: 1px #171515 solid;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .even {
                background-color: #f1f1f1;
                }
                .odd {
                    background-color: #e1e1e1;
                }
                
    </style>
</head>
<body>
    <?php
    for ($i = 1; $i < 101; $i++) {
        if ($i % 2 == 0) {
            echo "<div class=even>$i</div>";
        }else {
            echo "<div class=odd>$i</div>";
        }
    }
    ?>
</body>
</html>