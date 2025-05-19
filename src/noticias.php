<?php 
// header("Access-Control-Allow-Origin: http://127.0.0.1:40937");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-type");
header("Access-Control-Allow-Methods: POST, PUT, DELETE, GET");
$server = $_SERVER;
$request  = (array)json_decode(file_get_contents("php://input"));

if($server["REQUEST_METHOD"] != "GET"){
}else{
require_once("./conn.php");
$response = getNoticias();
}
echo json_encode($response);
