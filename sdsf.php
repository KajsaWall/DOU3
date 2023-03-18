<?php
    if(isset($_SERVER["REQUEST_METHOD"])) {
        $method = $_SERVER["REQUEST_METHOD"];
        echo "<h2>You are using the HTTP methos $method</h2>";
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
