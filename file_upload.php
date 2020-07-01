<?php
require('./fun.php');

if (!$_FILES) echoJson();
if ($_FILES["photo"]["error"] > 0) {
    echoJson();
} else {
    $file_name = $_FILES["photo"]["name"];
    $upload_file = "upload/" . $file_name;
    if (checkFile($file_name)) {
        echoJson(['file' => $upload_file], true);
    } else {
        move_uploaded_file($_FILES["photo"]["tmp_name"], $upload_file);
        if (checkFile($file_name)) {
            echoJson(['file' => $upload_file], true);
        }
    }
}
?>
