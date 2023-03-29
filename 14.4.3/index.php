<?php
ini_set("display_errors", 1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>
<body>
    <main>
        <h1>Filuppladdning</h1>
        <form action="receiver.php" id="upload" method="POST">
        <input type="file" name="file">
        <button type="submit">Upload</button>
        </form>  
        <div id="image">
        <img src="" alt="" id="">
        </div>
    </main>


</body>
</html>

<script>
    const form = document.getElementById("upload");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        const bodyRequest = new Request ("receiver.php", {
            method: "POST",
            body: formData
        });

        fetch(bodyRequest)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let div = document.getElementById("image");
                div.innerHTML = `
                <h2>Successfully uploaded the image</h2>
                <img src=${data} alt="" id="image">`;
            });

        
    })
</script>
