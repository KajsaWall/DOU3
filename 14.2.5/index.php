<?php
ini_set("display_errors", 1);
$filename = "points.json";
$message = "";
$notice = "";

if(!file_exists($filename)) {
    $points = 0;
    $json = json_encode($points);
    file_put_contents($filename, $json);

} else {
    $json = file_get_contents($filename);
    $points = json_decode($json, true);

    if (isset($_POST["points"])) {

        if($_POST["points"] > 100) {
            $message = "You can't add more then 100 points...";
        } else {
            $points += $_POST["points"];
            if($points == 100) {
                $notice = "Perfect!";
            } elseif ($points > 100) {
                $message = "The points reached the maximum of 100, resetting...";
                $points = 0;
                file_put_contents($filename, $points);
            } elseif ($points >= 90) {
                $notice = "Getting close!";
            } 
            file_put_contents($filename, $points);

        }
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
        <h1>Point collector</h1>
        <p><?php echo $message ?></p>
        <h2 class="message">Current points: <?php echo "$points"; ?> </h2>
        <progress value="<?php echo $points; ?>" max="100"></progress>        <p class="notice"><?php echo $notice ?></p>
        <form action="index.php" method="POST">
            <input type="number" name="points">
            <button type="submit">Add points</button>
        </form>
    </main>
</body>
</html>