<?php
 require_once '../cors.php';
 require_once '../entity/Argonaute.class.php';

 $inputJSON = file_get_contents('php://input');
 $input = json_decode( $inputJSON, TRUE );
 $argonauteName = $input['name'];
    if(!empty($argonauteName)){
        $newArgonaute = new Argonaute($argonauteName);
        $addTobdd = $newArgonaute->addArgaunote();
        echo json_encode($addTobdd);
    }
    else{
        echo json_encode(false);
    }
 
?>