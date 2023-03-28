<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Do you GET it?</title>
</head>
<body>
    <h1>Do you GET it?</h1>
    <p><i>Observer att länkarna nedan går till mappen "/solution", du kan behöva redigera dessa på egen hand (dessa var bara till för att enklare kunna demonstrera det hela).</i></p>
    <ol>
        <li>En användare baserat på deras ID, t.ex. <a href="api.php?id=5">api.php?id=5</a></li>
        <li>Alla användare under en ålder, t.ex. <a href="api.php?belowAge=30">api.php?belowAge=30</a></li>
        <li>Alla användare som "känner" en viss användare, t.ex. <a href="api.php?knows=4">api.php?knows=4</a></li>
        <li>En list över alla användares email, <a href="api.php?email=export">api.php?email=export</a></li>
        <li>Alla användare vars för- och/eller efternamn innehåller <i>XYZ</i>, t.ex. <a href="api.php?search=liv">api.php?search=liv</a>, tips: <code>str_contains()</code></li>
    </ol>
</body>
</html>