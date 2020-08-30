CREATE TABLE `usuarios` (
  `codigo` bigint NOT NULL auto_increment,
  `cargo` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employ` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nascimento` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `setor` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) 