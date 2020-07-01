<?php
header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");

function checkFile($name)
{
    return file_exists("upload/" . $name);
}

function echoJson($data = [], $status = false) {
    $data = array_merge(['status' => $status], $data);
    exit(json_encode($data));
}