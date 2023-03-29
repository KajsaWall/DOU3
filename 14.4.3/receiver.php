<?php

    $JSONfile = "images.json";

        $file = $_FILES["file"];
        $source = $_FILES["file"]["tmp_name"];
        $filename = $_FILES["file"]["name"];
        //$destination = "uploads/". $name;
        $name = sha1("$filename");

        $destination = "uploads/" . $name;

        if (!file_exists($JSONfile)) {
            $jsonElement = ["source" => $destination];
            $json = json_encode($jsonElement);
            file_put_contents($JSONfile, $json);
        } else {
            $JSON = file_get_contents($JSONfile);
            $images = json_decode($JSON, true);

            $newimage = ["source" => $destination];
            $images[] = $newimage;
            $json = json_encode($images);
            file_put_contents($JSONfile, $json);
        }

        if(move_uploaded_file($source, $destination)) {
            header("Content-Type: application/json");
            http_response_code(200);
            $json = json_encode($destination);
            echo $json;
            exit();     
        }



    
    
    //var_dump($_FILES);
//if(isset($_FILES["file"])) {
   // var_dump($_FILES["file"]);
//}
?>