<?php
require('./fun.php');
require('./sleekdb/src/SleekDB.php');

if (!$_POST) echoJson();
// doc: https://sleekdb.github.io/#getting-started
$dataDir = __DIR__ . "/sleekdb/db/";
$booksStore = \SleekDB\SleekDB::store('books', $dataDir);
$booksData = $_POST;
$booksData['created'] = date("Y-m-d H:i:s");
$booksData['timestamp'] = time();
$results = $booksStore->insert($_POST);
echoJson($results, true);
