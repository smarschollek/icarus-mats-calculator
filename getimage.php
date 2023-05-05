<?php
$urls = file("getimage.txt");
foreach($urls as $url) {
    $filename = explode("/", $url);
    $filename = $filename[7];
    if(!file_exists("public/images/$filename")) {
        echo "downloding $filename\n\r";
        file_put_contents("public/images/$filename", fopen("$url", 'r'));
    }
}

