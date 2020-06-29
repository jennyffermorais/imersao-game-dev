function preload() {
  imagemCenario = loadImage("../imagens/cenario/floresta5.png");
  imagemGameOver = loadImage("../imagens/assets/game-over.png");
  imagemPersonagem = loadImage("../imagens/personagem/correndo.png");
  imagemInimigo = loadImage("../imagens/inimigos/gotinha.png");
  imagemInimigoVoador = loadImage("../imagens/inimigos/gotinha-voadora.png");
  imagemInimigoGrande = loadImage("../imagens/inimigos/troll.png");
  imagemTelaInicial = loadImage("../imagens/assets/telaInicial.png");
  imagemVida = loadImage("../imagens/assets/coracao.png");
  fonteTelaInicial = loadFont("../imagens/assets/fonteTelaInicial.otf");
  fita = loadJSON("../fita/fita.json");
  somDoJogo = loadSound("../sons/trilha_jogo.mp3");
  somDoPulo = loadSound("../sons/somPulo.mp3");
}
