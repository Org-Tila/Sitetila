-- Cria o banco de dados TILA se ele não existir
CREATE DATABASE IF NOT EXISTS tila_db;

-- Seleciona o banco de dados para usar
USE tila_db;

-- Tabela para os Responsáveis (Pais)
CREATE TABLE Responsavel (
    id_responsavel INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL, -- Senhas devem ser armazenadas com hash, então o campo é maior
    ativo BOOLEAN DEFAULT TRUE,
    ultimo_login DATETIME,
    senha_ultima_alteracao DATETIME,
    usa_acessibilidade BOOLEAN DEFAULT FALSE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para as Crianças
CREATE TABLE Crianca (
    id_crianca INT PRIMARY KEY AUTO_INCREMENT,
    id_responsavel INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    sexo ENUM('M', 'F', 'OUTRO') NOT NULL,
    FOREIGN KEY (id_responsavel) REFERENCES Responsavel(id_responsavel) ON DELETE CASCADE
);

-- Tabela de Planos de Assinatura
CREATE TABLE Plano (
    id_plano INT PRIMARY KEY AUTO_INCREMENT,
    nome ENUM('comum', 'premium') NOT NULL,
    valor DECIMAL(10, 2) NOT NULL
);

-- Tabela de Bancos (para pagamentos)
CREATE TABLE Banco (
    id_banco INT PRIMARY KEY AUTO_INCREMENT,
    codigo_banco VARCHAR(10) NOT NULL,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de Bandeiras de Cartão
CREATE TABLE Bandeira (
    id_bandeira INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

-- Tabela de Pagamentos
CREATE TABLE Pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    id_responsavel INT NOT NULL,
    id_plano INT NOT NULL,
    id_bandeira INT,
    id_banco INT,
    data_hora DATETIME NOT NULL,
    tipo_transacao ENUM('credito', 'debito') NOT NULL,
    status ENUM('aprovado', 'negado', 'processando') NOT NULL,
    FOREIGN KEY (id_responsavel) REFERENCES Responsavel(id_responsavel),
    FOREIGN KEY (id_plano) REFERENCES Plano(id_plano),
    FOREIGN KEY (id_bandeira) REFERENCES Bandeira(id_bandeira),
    FOREIGN KEY (id_banco) REFERENCES Banco(id_banco)
);

-- Tabela de Configurações Parentais
CREATE TABLE ConfiguracoesParentais (
    id_config INT PRIMARY KEY AUTO_INCREMENT,
    id_responsavel INT NOT NULL,
    limite_tempo_diario TIME,
    horario_inicio TIME,
    horario_fim TIME,
    FOREIGN KEY (id_responsavel) REFERENCES Responsavel(id_responsavel)
);

-- Tabela de Jogos
CREATE TABLE Jogo (
    id_jogo INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT
);

-- Tabela de Níveis dos Jogos
CREATE TABLE Nivel (
    id_nivel INT PRIMARY KEY AUTO_INCREMENT,
    id_jogo INT NOT NULL,
    numero INT NOT NULL,
    dificuldade VARCHAR(50),
    FOREIGN KEY (id_jogo) REFERENCES Jogo(id_jogo)
);

-- Tabela de Progresso da Criança nos Níveis
CREATE TABLE Progresso (
    id_progresso INT PRIMARY KEY AUTO_INCREMENT,
    id_crianca INT NOT NULL,
    id_nivel INT NOT NULL,
    status ENUM('em_andamento', 'concluido') NOT NULL,
    data_conclusao DATE,
    tentativas INT DEFAULT 1, -- Começa com 1 na primeira tentativa
    FOREIGN KEY (id_crianca) REFERENCES Crianca(id_crianca),
    FOREIGN KEY (id_nivel) REFERENCES Nivel(id_nivel)
);

-- Tabela de Recompensas
CREATE TABLE Recompensa (
    id_recompensa INT PRIMARY KEY AUTO_INCREMENT,
    id_progresso INT NOT NULL,
    descricao VARCHAR(255),
    tipo VARCHAR(50),
    FOREIGN KEY (id_progresso) REFERENCES Progresso(id_progresso)
);

-- Tabela de Sessões de Uso
CREATE TABLE SessaoUso (
    id_sessao INT PRIMARY KEY AUTO_INCREMENT,
    id_crianca INT NOT NULL,
    inicio DATETIME NOT NULL,
    fim DATETIME,
    tempo_total_segundos INT,
    FOREIGN KEY (id_crianca) REFERENCES Crianca(id_crianca)
);