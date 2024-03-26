# API do Sistema Gerador de Documentação Automática da SEE

Este projeto consiste em uma API para o Sistema Gerador de Documentação Automática da Secretaria Especial de Esportes (SEE) do município do Ipojuca. O sistema é responsável pelo cadastramento de Atletas, Responsáveis de Atletas e dos projetos de patrocínio dos mesmos, além de permitir a geração automática dos documentos emitidos pela junta técnica da SEE.

### Status do Projeto

 ![Projeto Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<br>


## Índice
* [Escopo do Projeto](#Escopo-do-Projeto)
* [Detalhamento do Projeto](#Detalhamento-do-Projeto)
* [Tecnologias](#tecnologias)

<br>

## Escopo do Projeto

O **Sistema Gerador de Documentação Automática da SEE** foi idealizado e realizado por [Marcelo Raposo](https://github.com/marcelofox4), servidor e integrante do setor de análise de projetos na Secretaria Especial de Esportes do município do Ipojuca. Essa iniciativa foi parte de uma atividade da graduação em Análise e Desenvolvimento de Sistemas (ADS), na cadeira de Atividades Práticas Interdisciplinares de Extensão I e II, com o objetivo de facilitar e ajudar atletas a ingressarem com o pedido de Patrocínio na SEE. O projeto pode ser acessado nas seguintes URLs:

- [Atividades Práticas Interdisciplinares de Extensão I](https://github.com/marcelofox4/faculdade-ads/tree/main/2-periodo/atividades-praticas-interdisciplinares-de-extensão-I/atividades-contextualizadas)
- [Atividades Práticas Interdisciplinares de Extensão II](https://github.com/marcelofox4/faculdade-ads/tree/main/4-periodo/atividades-praticas-interdisciplinares-de-extencao-II)
- [Esporte Ipojucano](https://esporteipojucano.com.br/)

<br>

## Detalhamento do Projeto: 

Para uma melhor compreensão do projeto proposto, segue o link do documento de Especificação de Requisitos:

- [Especificação dos requisitos do Software: Gerador de documentação automática da SEE](https://github.com/marcelofox4/gerador-de-documentacao-see/blob/main/docs/system-requirements-specification/especifica%C3%A7%C3%A3o-de-requisitos-de-software.pdf)

<br>

## Tecnologias

- **JavaScript, TypeScript**: Linguagens de programação utilizadas no desenvolvimento;
- **Node.js**: Framework que permite a execução de JavaScript em aplicações Server Side;
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado com linguagem SQL;
- **Express**: Framework para Node.js utilizado para construção de servidores web;
- **TypeORM**: ORM utilizado no projeto, executável em Node.js e compatível com TypeScript e JavaScript (ES5, ES6, ES7). Permite a criação de entidades de banco de dados a partir de classes TypeScript e JavaScript, além de suportar os recursos mais recentes do JavaScript;
- **Jest**: Para a realização de testes unitários;
- **Docker**: Criação da imagem do container;
- **Docker Compose**: para orquestração das imagens locais da API e do PostgreSQL.

<br>