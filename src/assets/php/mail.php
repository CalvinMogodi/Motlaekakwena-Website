<?php
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        try {
            $json = file_get_contents('php://input'); 
            mail('cmogodi@gmail.com','Contact Us', $json); 
        } catch (Exception $e) {
            mail('cmogodi@gmail.com', 'Caught exception', $e->getMessage());
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>