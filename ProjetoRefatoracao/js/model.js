class WordleModel {
    constructor() {
        this.dicionarios = {
            'pt': ["TESTE", "DADOS", "PILHA", "SUITE", "FALHA", "CHAVE", "MOUSE", "TERMO"],
            'en': ["CLEAN", "SMELL", "PRINT", "FILES", "STACK", "TRASH", "SHELF", "MOUSE", "SCREEN", "PLANT"]
        };
        this.idioma = '';
        this.palavraSecreta = '';
        this.tentativaAtual = 0;
        this.caractereAtual = 0;
        this.pontuacaoTotal = 0;
        this.rodadaAtual = 1;
        this.jogoFinalizado = false;
        this.matrizTabuleiro = [];
    }

    configurarJogo(idioma) {
        this.idioma = idioma;
        const palavrasValidas = this.dicionarios[idioma].filter(p => p.length === 5);
        this.palavraSecreta = palavrasValidas[Math.floor(Math.random() * palavrasValidas.length)].toUpperCase();
        this.tentativaAtual = 0;
        this.caractereAtual = 0;
        this.jogoFinalizado = false;
        this.matrizTabuleiro = Array(6).fill().map(() => Array(5).fill(""));
    }

    adicionarLetra(letra) {
        if (this.caractereAtual < 5) {
            this.matrizTabuleiro[this.tentativaAtual][this.caractereAtual] = letra;
            this.caractereAtual++;
            return true;
        }
        return false;
    }

    removerLetra() {
        if (this.caractereAtual > 0) {
            this.caractereAtual--;
            this.matrizTabuleiro[this.tentativaAtual][this.caractereAtual] = "";
            return true;
        }
        return false;
    }

   validarPalpite() {
        const palpite = this.matrizTabuleiro[this.tentativaAtual].join("");
        const segredo = this.palavraSecreta;
        
        // 1. Criamos um array para o resultado (padrão é erro)
        let resultadoCores = Array(5).fill("erro");
        
        // 2. Criamos um mapa de contagem das letras da palavra secreta
        // Ex: SUITE -> {S:1, U:1, I:1, T:1, E:1}
        let contagemLetrasSobra = {};
        for (let letra of segredo) {
            contagemLetrasSobra[letra] = (contagemLetrasSobra[letra] || 0) + 1;
        }

        // 3. Primeira passada: Marcar apenas os VERDES (Posição correta)
        // Isso é prioritário para não "gastar" a contagem com amarelos antes da hora
        for (let i = 0; i < 5; i++) {
            if (palpite[i] === segredo[i]) {
                resultadoCores[i] = "correto";
                contagemLetrasSobra[palpite[i]]--;
                this.pontuacaoTotal += 10;
            }
        }

        // 4. Segunda passada: Marcar os AMARELOS (Existe, mas posição errada)
        for (let i = 0; i < 5; i++) {
            // Só verificamos se já não foi marcado como verde
            if (resultadoCores[i] !== "correto") {
                if (contagemLetrasSobra[palpite[i]] > 0) {
                    resultadoCores[i] = "tem";
                    contagemLetrasSobra[palpite[i]]--;
                    this.pontuacaoTotal += 5;
                }
            }
        }

        return { palpite, resultadoCores };
    }
}