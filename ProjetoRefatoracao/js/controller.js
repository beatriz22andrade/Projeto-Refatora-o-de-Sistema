class WordleController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.escutarEventos();
    }

    escutarEventos() {
        // Botões de Idioma
        document.querySelectorAll('.btn-idioma').forEach(btn => {
            btn.onclick = () => {
                const lang = btn.innerText.toLowerCase().includes('port') ? 'pt' : 'en';
                this.iniciarJogo(lang);
            };
        });

        // Teclado
        window.onkeydown = (e) => {
            if (this.model.jogoFinalizado || !this.model.idioma) return;

            const tecla = e.key.toUpperCase();
            
            if (tecla === "BACKSPACE") {
                if (this.model.removerLetra()) {
                    this.view.escreverNoTile(this.model.tentativaAtual, this.model.caractereAtual, "");
                }
            } else if (tecla === "ENTER" && this.model.caractereAtual === 5) {
                this.confirmarTentativa();
            } else if (/^[A-Z]$/.test(tecla)) {
                if (this.model.adicionarLetra(tecla)) {
                    // Importante: usamos caractereAtual - 1 porque o model já incrementou
                    this.view.escreverNoTile(this.model.tentativaAtual, this.model.caractereAtual - 1, tecla);
                }
            }
        };
    }

    iniciarJogo(lang) {
        this.model.configurarJogo(lang);
        document.getElementById('tela-inicio').style.display = 'none';
        document.getElementById('tela-jogo').style.display = 'flex';
        this.view.desenharTabuleiro();
        this.view.atualizarStats(this.model.pontuacaoTotal, this.model.rodadaAtual);
    }

    confirmarTentativa() {
        const { palpite, resultadoCores } = this.model.validarPalpite();
        this.view.pintarLinha(this.model.tentativaAtual, resultadoCores);
        this.view.atualizarStats(this.model.pontuacaoTotal, this.model.rodadaAtual);

        if (palpite === this.model.palavraSecreta) {
            alert("Parabéns!");
            this.model.rodadaAtual++;
            this.iniciarJogo(this.model.idioma);
        } else {
            this.model.tentativaAtual++;
            this.model.caractereAtual = 0;
            if (this.model.tentativaAtual === 6) {
                alert("Fim de jogo! Palavra: " + this.model.palavraSecreta);
                this.model.jogoFinalizado = true;
            }
        }
    }
}

// Inicialização imediata
const app = new WordleController(new WordleModel(), new WordleView());