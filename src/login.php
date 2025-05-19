<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-type");
header("Access-Control-Allow-Methods: POST, PUT, DELETE, GET");
$server = $_SERVER;
$login  = (array)json_decode(file_get_contents("php://input"));


if($server["REQUEST_METHOD"] != "POST" || !array_key_exists("cpf",$login)){
    echo json_encode(["error" => "Solicitação não correta"]);
}


require_once("./conn.php");
$response = verifyUser($login["cpf"]);
// if(array_key_exists("user",$response) && $response["user"] != null || $response["user"]["id"]){
//     mkdir("/json/", 777);
// }
echo json_encode($response);

?>