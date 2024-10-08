const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que fazer quando  identificar que uma criança está sofrendo bullying?",
        alternativas: [
            {
                texto:"Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.", 
                afirmação:"afirmação1" //inserir a afirmação
            },
            {
                texto:"Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.", 
                afirmação:"afirmação1"
            },
           // "Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.", 
           // "Intervir e defender a vítima, conversar com o agressor."
    
        ],
    },
    {
    
        enunciado: 
        "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto:"Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
                afirmação:"afirmação2"
            },
            {
                texto:"Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
                afirmação:"afirmação2"
            },
           // "Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
 
            //"O esporte é uma atividade competitiva que tem regras fixas e treinamentos e pratico regularmente."
        ]
    },
    {
    
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida a partir da luz do sol. Diante disso eu:",
        alternativas: [
            {
                texto:"Investiria em energia solar", 
                afirmação: "afirmação3"
            },
            {
                texto:"Investiria em energia solar", 
                afirmação: "afirmação3"
            },
           // "Investiria em energia solar", 
           // "Iria dar continuade ao uso da energia hidrelétrica"
        ]
    }  
];

let atual = 0;/*variável com posição zero(listas começam com posição zero),o valor mudará quando percorrermos a lista (aula4)*/ 
let perguntaAtual;/*variável vazia, receberá o texto da pergunta. Essa variável também mudará com o tempo, recebendo o texto de diferentes perguntas.(aula4)*/ 
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}


mostraPergunta();

