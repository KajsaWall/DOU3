<?php
ini_set("display_errors", 1);
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
        <h1>Forms for testing</h1>

        <form action="receiver.php" method="GET">
            <h2>Send data via GET</h2>
            <input type="text" name="name" placeholder="Name">
            <input type="text" name="breed" placeholder="Breed">
            <input type="number" name="age" placeholder="Age">
            <!-- You can send data as hidden values (eg. Authorization tokens) -->
            <input type="hidden" name="secret" value="Say what?">
            <button type="submit">Send</button>
        </form>

        <form action="receiver.php" method="POST">
            <h2>Send data via POST</h2>
            <input type="text" name="first_name" placeholder="First name">
            <input type="text" name="last_name" placeholder="Last name">
            <input type="email" name="email" placeholder="Email">
            <input type="number" name="phone" placeholder="Phone number">
            <input type="text" name="address" placeholder="Address">
            <input type="number" name="zipcode" placeholder="Zip Code">
            <input type="text" name="city" placeholder="City">
            <button type="submit">Send</button>
        </form>
    </main>
</body>
</html>