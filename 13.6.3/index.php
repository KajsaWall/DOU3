<?php
// Er data.
$dogs = [
    [
        "heading" => "Labrador Retrievers",
        "content" => 'These friendly and active pups have held the top spot the past 28 years in a row. "This is a do-everything breed that needs to be with its humans," long-timer breeder Erin Henlon-Hall told the AKC. "It personifies the definition of versatility — hunting, showing, family, dock diving, tracking, obedience. It’s as American as baseball, hot dogs, and apple pie."'
    ],
    [
        "heading" => "German Shepherds",
        "content" => 'These trusted companions often work as police dogs and service dogs because they\'re fiercely loyal to their main caretakers.'
    ],
    [
        "heading" => "Golden Retrievers",
        "content" => 'This intelligent, friendly breed is basically the movie star of the group with starring roles on Full House, Air Bud, and Homeward Bound.'
    ],
    [
        "heading" => "French Bulldogs",
        "content" => 'Frenchies have big personalities but require minimal exercise. It\'s no wonder the big-eared pooches are also the top choice in New York, San Francisco, and Miami, the AKC announced.'
    ]
];
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Övning 03</title>
        <meta charset="utf-8">
        <style>
            /* Er CSS. */
            body {
                max-width: 600px;
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .dog {
                margin-bottom: 20px;
            }

            .dog h2 {
                margin: 0;
                padding: 20px;
                border-radius: 4px 4px 0 0;
                background-color: #0088cc;
                color: white;
            }

            .dog p {
                font-family: Georgia;
                line-height: 1.4;
                margin: 0;
                padding: 20px;
                border-radius: 0 0 4px 4px;
                border: 1px solid #ccc;
                border-top: 0;
            }
        </style>
    </head>
    <body>
        <h1>The 4 Most Popular Dog Breeds in the Country</h1>
        <?php
        foreach ($dogs as $index => $dog) {
            $number = $index + 1;
            echo "<div class=dog>";
            echo "<h2>$number. $dog[heading]</h2>";
            echo "<p>$dog[content]</p>";
            echo "</div>";

        }
        ?>
    </body>
</html>