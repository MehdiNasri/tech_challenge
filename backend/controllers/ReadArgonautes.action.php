<?php 
require_once '../cors.php';
require_once '../entity/Argonaute.class.php';

$argonautes = new Argonaute("");
$readFromBdd = $argonautes->readArgonaute();
 echo json_encode($readFromBdd); 
?>