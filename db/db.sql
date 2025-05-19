CREATE DATABASE arani;

CREATE TABLE usuario(
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    dir_user VARCHAR(225)
);

CREATE TABLE noticia(
    id VARCHAR(255) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    id_usuario VARCHAR(255) NOT NULL,
    permissao BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    dir VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_usuario)  REFERENCES usuario(id)
);

INSERT INTO usuario(id, nome, cpf) VALUES ('3','José','2123');
INSERT INTO noticia(id,descricao,id_usuario,permissao,data_publicacao,dir) VALUES('2','Uma densa cortina de fumaça cobre o horizonte, reduzindo a visibilidade e tingindo o céu de um tom alaranjado opaco. O ar está pesado, com um cheiro forte de madeira queimada e fuligem, dificultando a respiração. As chamas avançam de forma irregular, alimentadas pela vegetação seca, consumindo árvores, arbustos e o solo com intensidade variável.','3',TRUE,'10/12/12 12:12','../img/pexels-fabricio-vega-2152225592-32086067.jpg');
SELECT noticia.*, usuario.nome FROM noticia INNER JOIN usuario ON noticia.id_usuario = usuario.id;