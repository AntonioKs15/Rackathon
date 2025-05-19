<?php 
// header("Access-Control-Allow-Origin: http://127.0.0.1:40937");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-type");
header("Access-Control-Allow-Methods: POST, PUT, DELETE, GET");
$server = $_SERVER;
$login  = (array)json_decode(file_get_contents("php://input"));


if($server["REQUEST_METHOD"] == "POST" && array_key_exists("nome",$login) && array_key_exists("cpf",$login)){
    $nome = $login["nome"];
    $cpf = $login["cpf"];
    // var_dump($login);
    require_once("./conn.php");
    $response = insertUser($nome, $cpf);

    echo json_encode($response);
}else
    echo json_encode(["error" => "Solicitação não correta"]);

?>