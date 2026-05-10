class WordleView {
    constructor() {
        this.grid = document.getElementById("board");
        this.score = document.getElementById("score-val");
        this.round = document.getElementById("round-val");
    }

    desenharTabuleiro() {
        this.grid.innerHTML = "";
        for (let i = 0; i < 6; i++) {
            let linha = document.createElement("div");
            linha.className = "linha";
            for (let j = 0; j < 5; j++) {
                let t = document.createElement("div");
                t.className = "tile";
                t.id = `t-${i}-${j}`;
                linha.appendChild(t);
            }
            this.grid.appendChild(linha);
        }
    }

    escreverNoTile(l, c, letra) {
        const tile = document.getElementById(`t-${l}-${c}`);
        if (tile) tile.innerText = letra;
    }

   pintarLinha(l, cores) {
        const mapa = { 
            'correto': "#b9f1cd", // Rosa forte para letra certa
            'tem': "#e0e0e0",     // Rosa médio para letra no lugar errado
            'erro': "#ff85a2"      // Cinza clarinho para erro
        };

        for (let i = 0; i < 5; i++) {
            const tile = document.getElementById(`t-${l}-${i}`);
            tile.style.background = mapa[cores[i]];
            tile.style.borderColor = "transparent";
            tile.style.color = "white"; // Letras brancas ficam lindas no fundo rosa
        }
    }
    atualizarStats(p, r) {
        this.score.innerText = p;
        this.round.innerText = r;
    }
}