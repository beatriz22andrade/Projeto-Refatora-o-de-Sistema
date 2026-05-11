# Wordle Multi - Reengenharia de Software

## 1. Introdução
Este projeto consiste na reengenharia completa de um protótipo de jogo Wordle. O código original, que se encontrava em um estado de "Código Espaguete", foi refatorado para seguir padrões modernos de arquitetura, construção e gerência de configuração.

## 2. DTP 01: Arquitetura MVC
O sistema foi modularizado e separado em três camadas distintas para garantir a manutenibilidade:
- **Model:** Gerencia o estado do jogo, dicionários e lógica de pontuação.
- **View:** Responsável exclusiva pela renderização do tabuleiro e temas visuais (CSS).
- **Controller:** Atua como mediador entre as entradas do usuário e a lógica do sistema.

## 3. DTP 02: Construção de Software
Seguindo os princípios de Clean Code, foram realizadas as seguintes melhorias:
- **Nomenclatura:** Substituição de variáveis enigmáticas como `r_a`, `c_a`, `sc` e `m` por `tentativaAtual`, `colunaAtual`, `pontuacao` e `matrizTabuleiro`.
- **Tratamento de Dados:** Implementada validação robusta para garantir que apenas palavras de 5 letras sejam selecionadas dos dicionários.
- **Eliminação de Números Mágicos:** Centralização de constantes de configuração para o limite de tentativas e pontuações.

## 4. DTP 03: Gerência de Configuração (GitHub)
O desenvolvimento seguiu uma estratégia profissional de versionamento:
- **Histórico Incremental:** Commits detalhados por etapa de desenvolvimento.
- **Branching Strategy:** Uso de branches `feature/mvc-architecture` e `feature/code-quality`.
- **Relatório de Code Smells Resolvidos:**
    1. **Mysterious Name:** Nomes de variáveis que não revelavam intenção.
    2. **Spaghetti Code:** Falta de divisão de responsabilidades.
    3. **Magic Numbers:** Valores fixos espalhados sem contexto.

## 5. Instruções de Execução
1. Clone o repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Clique no botão de idioma para iniciar o jogo.
