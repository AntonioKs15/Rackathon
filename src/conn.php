<?php 

// use PDO;

function conn() : PDO{
    $sgbd   = "pgsql";
    $host   = "127.0.0.1";
    $port   = "5432";
    $dbName = "arani";
    $user   = "servers";
    $pass   = "pass@123server";

    $conn = new PDO("$sgbd:host=$host;port=$port;dbname=$dbName;", $user, $pass);
    
    return $conn;
}

function verifyUser($cpf) : array {
    $conn = conn();
    if(!$conn)
        return ["error" => "Erro na conexão"];
    
    $query = $conn->prepare("SELECT * FROM usuario WHERE cpf = :cpf");
    $query->bindParam(":cpf", $cpf);

    if(!$query->execute())
        return ["error" => "Erro na conexão"];

    return $query->rowCount() > 0 ? ["user" => $query->fetch(PDO::FETCH_ASSOC)] : ["user"=>null];
}

function getNoticias() : array{
    $conn = conn();
    if(!$conn)
        return ["error" => "Erro na conexão"];

    return ["noticias" => $conn->query("SELECT noticia.*, usuario.nome FROM noticia INNER JOIN usuario ON noticia.id_usuario = usuario.id ORDER BY data_publicacao")->fetchAll(PDO::FETCH_ASSOC)];
}  

function insertUser($nome, $cpf){
    $conn = conn();
    if(!$conn)
        return ["error" => "Erro na conexão"];

    $id = random_int(10, 9999);
    $set = $conn->prepare("INSERT INTO usuario(id, nome, cpf) VALUES(:id, :nome, :cpf)");
    $set->bindParam(":id", $id);
    $set->bindParam(":nome", $nome);
    $set->bindParam(":cpf", $cpf);

    if(!$set->execute())
        return ["error" => "Erro na conexão"];

    return ["user" => ["nome" => $nome, "cpf" => $cpf, "id" => $id]];
}