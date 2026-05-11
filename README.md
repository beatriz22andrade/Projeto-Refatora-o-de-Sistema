# 🌸 Wordle Multi-Idioma - Reengenharia de Software

Este projeto consiste na reengenharia completa de um protótipo de jogo Wordle, focando na transição de um "Código Espaguete" para uma arquitetura profissional e organizada.

---

## 🏗️ DTP 01: Arquitetura e Padrão MVC
O maior salto de qualidade do projeto foi a separação de responsabilidades. O código original misturava lógica de jogo com manipulação de interface. Implementámos o padrão **MVC (Model-View-Controller)**:

- **Model (`js/model.js`):** Contém as regras de negócio, gestão dos dicionários e pontuação.
- **View (`js/view.js`):** Responsável por toda a parte visual, gerindo o grid rosa e o feedback de cores.
- **Controller (`js/controller.js`):** Atua como o "maestro", capturando os eventos do teclado e coordenando as ações entre o Model e a View.

---

## 🛠️ DTP 02: Construção de Software & Clean Code
Aplicámos técnicas de refatoração para tornar o software robusto e legível:

### ✅ Resolução de Code Smells
1. **Nomes Enigmáticos (Mysterious Name):** Substituímos nomes como `r_a`, `c_a`, `sc` e `m` por termos autoexplicativos: `tentativaAtual`, `caractereAtual`, `pontuacaoTotal` e `matrizTabuleiro`.
2. **Números Mágicos (Magic Numbers):** Centralizámos o tamanho da palavra (5) e o limite de tentativas (6) em constantes de configuração.
3. **Código Espaguete:** Funções gigantes foram fragmentadas em métodos pequenos e especializados.

### ✅ Melhorias de Lógica
- **Validação de Dicionário:** Implementámos um filtro que remove palavras que não possuem exatamente 5 letras (como "CODE" no dicionário original), evitando bugs no grid.
- **Lógica de Letras Repetidas:** Ajustámos o algoritmo para que letras repetidas no palpite não marquem "amarelo" se a letra já tiver sido esgotada na palavra secreta.

---

## 🎨 Interface e Design "Cute Pink"
A interface foi totalmente remodelada para um estilo fofo e moderno:
- **Cores:** Paleta em tons de rosa pastel e branco.
- **Layout:** Corrigido o alinhamento das caixas para o formato horizontal padrão.
- **Responsividade:** O placar e o tabuleiro ajustam-se para uma visualização limpa.

---

## ⚙️ DTP 03: Gerência de Configuração
O projeto demonstra o conhecimento em versionamento e evolução de software:
- **Evolução Incremental:** O código reflete as fases de refatoração pedidas nos Desafios Teórico-Práticos.
- **Relatório de Smells:** Todos os "maus cheiros" identificados foram documentados e corrigidos nas camadas correspondentes do MVC.

---

## 🚀 Como Executar
1. Faça o download ou clone este repositório.
2. Abra o ficheiro `index.html` em qualquer navegador.
3. Escolha o idioma (Português ou Inglês) e comece a jogar!

---
**Desenvolvido por:** Beatriz Andrade 
**Unidade Curricular:** Reengenharia de Software
